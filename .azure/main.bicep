param location string = resourceGroup().location
param appName string = 'music-mood-suggestor-${uniqueString(resourceGroup().id)}'
param spotifyClientId string = ''
@secure()
param spotifyClientSecret string = ''

// App Service Plan
resource appServicePlan 'Microsoft.Web/serverfarms@2022-03-01' = {
  name: '${appName}-plan'
  location: location
  sku: {
    name: 'B1'
    tier: 'Basic'
  }
  properties: {
    reserved: true // Linux plan
  }
}

// Application Insights
resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: '${appName}-insights'
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
    publicNetworkAccessForIngestion: 'Enabled'
    publicNetworkAccessForQuery: 'Enabled'
  }
}

// App Service
resource appService 'Microsoft.Web/sites@2022-03-01' = {
  name: appName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
    siteConfig: {
      linuxFxVersion: 'NODE|18-lts'
      appSettings: [
        {
          name: 'WEBSITE_NODE_DEFAULT_VERSION'
          value: '~18'
        }
        {
          name: 'SPOTIFY_CLIENT_ID'
          value: spotifyClientId
        }
        {
          name: 'SPOTIFY_CLIENT_SECRET'
          value: spotifyClientSecret
        }
        {
          name: 'APPLICATIONINSIGHTS_CONNECTION_STRING'
          value: appInsights.properties.ConnectionString
        }
        {
          name: 'ApplicationInsightsAgent_EXTENSION_VERSION'
          value: '~3'
        }
      ]
      alwaysOn: true
    }
  }
}

// Outputs
output appServiceName string = appService.name
output appServiceUrl string = 'https://${appService.name}.azurewebsites.net'
output appInsightsConnectionString string = appInsights.properties.ConnectionString