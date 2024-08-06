# Forge Frame SEQ Test App

## App setup details

After setting up your development environment, you can now start testing the app.

1. Clone this repository.
2. From the root of this repository, run `forge register <new name>`. This will register the app under your Atlassian developer account.
3. Install all the necessary Node modules with `npm install`.
4. Deploy the app with `forge deploy`.
5. Install the app with `forge install`. When asked to select a product, choose `Confluence`. You'll also be asked to supply your site's URL.
6. Create a page on your Confluence site.
7. Add the app on the created page like a normal macro.


## References

- CLI
    - [register](https://developer.atlassian.com/platform/forge/cli-reference/register/)
    - [deploy](https://developer.atlassian.com/platform/forge/cli-reference/deploy/)
    - [install](https://developer.atlassian.com/platform/forge/cli-reference/install/)
- Forge UI
    - [Component: Tabs](https://developer.atlassian.com/platform/forge/ui-kit/components/tabs/)
    - [Component: Form](https://developer.atlassian.com/platform/forge/ui-kit/components/form/)
    - [Hook: Use form](https://developer.atlassian.com/platform/forge/ui-kit/hooks/use-form/)
