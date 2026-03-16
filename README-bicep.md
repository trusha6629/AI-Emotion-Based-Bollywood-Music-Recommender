# Azure Bicep Deployment for Node.js Music Suggestor AI App

This repository contains Bicep templates to deploy a Node.js web application to Azure App Service with Application Insights monitoring.

## Prerequisites

- Azure CLI installed and logged in (`az login`)
- Bicep CLI installed (`az bicep install`)
- Azure subscription

## Deployment

1. Clone or navigate to this repository.

2. Update the `main.parameters.json` file with your actual values:
   - `spotifyClientId`: Your Spotify API client ID
   - `spotifyClientSecret`: Your Spotify API client secret
   - Optionally adjust `appName` and `appServicePlanName`

3. Deploy the infrastructure:

   ```bash
   az deployment group create \
     --resource-group <your-resource-group> \
     --template-file main.bicep \
     --parameters main.parameters.json
   ```

   Replace `<your-resource-group>` with your Azure resource group name. If the resource group doesn't exist, create it first:

   ```bash
   az group create --name <your-resource-group> --location <location>
   ```

## Application Configuration

The application is configured to:
- Run on Node.js 18 LTS
- Listen on port 3000 (handled by Azure App Service)
- Include environment variables for Spotify API credentials
- Send telemetry to Application Insights

## Outputs

After deployment, the following outputs are provided:
- `webAppUrl`: The URL of the deployed web app
- `appInsightsInstrumentationKey`: The instrumentation key for Application Insights

## Monitoring

Application Insights is automatically configured for monitoring. You can view telemetry data in the Azure portal under the Application Insights resource.

## Security Notes

- Store sensitive values like Spotify credentials securely (consider using Azure Key Vault for production)
- The app settings are visible in the Azure portal; use Key Vault references for secrets in production deployments