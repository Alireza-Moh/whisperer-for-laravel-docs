# Config

The plugin provides autocompletion for configuration files and their keys by scanning the project's config directory.
It fetches all available config files based on your project type and settings, ensuring quick, accurate access and easy navigation to config keys

![Code generation](./images/config/config-method.png)

![Code generation](./images/config/config-facade.png)

It also provides autocompletion for the following `Illuminate\Support\Facades\Config` methods:
* `get()`
* `fhas()`
* `array()`
* `boolean()`
* `float()`
* `integer()`
* `string()`
* `getMany()`
* `set()`
* `prepend()`