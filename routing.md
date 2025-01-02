# Routing

The plugin automatically scans all route files in your Laravel project, retrieves route names
and provides autocompletion for them. This ensures you can easily reference route names in your code.

The plugin offers route name autocompletion and resolving for the following methods:
* `route()`
* `to_route()`
* `signedRoute()`
* `Illuminate\Support\Facades\Redirect::route()`
* `Illuminate\Support\Facades\Redirect::signedRoute()`
* `Illuminate\Support\Facades\URL::route()`
* `Illuminate\Support\Facades\URL::signedRoute()`

![Code generation](./images/routing/route-completion-in-controller.png)

## Middleware completion

It can complete all available laravel middleware aliases and groups.

![Code generation](./images/routing/middleware-completion.png)

It provides autocompletion and resolving for the following methods:

* `Route::withoutMiddleware()`

## Namespace completion

It can complete all available namespaces.

![Code generation](./images/routing/namespace-completion.png)