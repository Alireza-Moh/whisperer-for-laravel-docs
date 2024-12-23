# Changelog

## 1.1.2 (2024-12-23)
* Adds autocompletion for controller actions and namespaces in route definitions
* Adds middleware autocompletion.
* Fixes bugs.

## 1.1.1 (2024-12-20)
* Triggers route names autocompletion for Redirect::route(), Redirect::signedRoute(), URL::route(), and URL::signedRoute() methods.
* Suppresses "Property accessed via magic method" warning for request fields.
* Adds request fields autocompletion and resolving.
* Implements method to resolve validation rules.
* Generates Eloquent models based on their namespace.
* Adds blade components autocompletion and resolving.
* Fixes Inertia.js autocompletion to include pages located directly in the root folder.
* Provides autocompletion for migration files and resolves related table files globally.

## 1.1.0 (2024-12-15)
* Added setting option for module src folder and Laravel directory.
* Added view mailable action
* Added check for Laravel root directory when the default is overwritten.
* Improved resolving and completion for configs, gates, routes, blade views
* Added Inertia package support.
* Added feature to provide controller method usage in routes

## 1.0.1 (2024-12-10)
* 

## 1.0-SNAPSHOT (2024-12-08)
* 