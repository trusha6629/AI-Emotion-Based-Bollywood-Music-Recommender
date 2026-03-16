param location string = resourceGroup().location
param appName string
param appServicePlanName string
param skuName string = 'B1'
param skuTier string = 'Basic'
param spotifyClientId string
param spotifyClientSecret string

resource appServicePlan 'Microsoft.Web/serverfarms@2024-11-01' = {
  name: appServicePlanName
  location: location
  sku: {
    name: skuName
    tier: skuTier
  }
  properties: {
    reserved: true
  }
}

resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: '${appName}-insights'
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
  }
}

resource webApp 'Microsoft.Web/sites@2024-11-01' = {
  name: appName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: 'NODE|18-lts'
      appSettings: [
        {
          name: 'SPOTIFY_CLIENT_ID'
          value: spotifyClientId
        }
        {
          name: 'SPOTIFY_CLIENT_SECRET'
          value: spotifyClientSecret
        }
        {
          name: 'APPINSIGHTS_INSTRUMENTATIONKEY'
          value: appInsights.properties.InstrumentationKey
        }
      ]
    }
  }
}

output webAppUrl string = 'https://${webApp.name}.azurewebsites.net'
output appInsightsInstrumentationKey string = appInsights.properties.InstrumentationKey