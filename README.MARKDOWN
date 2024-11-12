# DevCon 2024 - How to Implement your Design System in Liferay

## How to Deploy

1. In the workspace root directory add a `gradle-local.properties`.
1. Add the property `liferay.workspace.home.dir=/path/to/liferay/home`.
1. Run `./gradlew clean deploy` to deploy the modules.

The site initializers expect some of the other client extensions to already be available in Liferay. As a result you will need to run `./gradlew clean deploy` more than once to properly initialize the site.

## Setting up the Commerce Content Site

1. Navigate to `Control Panel > Sites` and create a new site using the "Minium" template.
1. Navigate to `Commerce > Store Management > Channels`.
1. Click to edit the channel you just created with the Minium template.
1. Switch to the `Type` tab and click the "Select Site" button.
1. Choose the "Commerce Content" site and click "Save".
1. Navigate to the "Commerce Content" site to see the site connected with the channel.

## References

https://github.com/marcoscv-work/noClay-theme-css-client-extension

## Presentation