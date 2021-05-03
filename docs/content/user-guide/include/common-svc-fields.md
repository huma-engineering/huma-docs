<div class="separator"></div>

<a id="entrypoint" href="#entrypoint" class="field">`entrypoint`</a> <span class="type">String or Array of Strings</span>  
Override the default entrypoint in the image.  
```yaml
# String version.
entrypoint: "/bin/entrypoint --p1 --p2"
# Alteratively, as an array of strings.
entrypoint: ["/bin/entrypoint", "--p1", "--p2"]
```

<div class="separator"></div>

<a id="command" href="#command" class="field">`command`</a> <span class="type">String or Array of Strings</span>  
Override the default command in the image.  

```yaml
# String version.
command: ps au
# Alteratively, as an array of strings.
command: ["ps", "au"]
```

<div class="separator"></div>

<a id="count" href="#count" class="field">`count`</a> <span class="type">Integer or Map</span>  
If you specify a number:
```yaml
count: 5
```
The service will set the desired count to 5 and maintain 5 tasks in your service.

<span class="parent-field">count.</span><a id="count-spot" href="#count-spot" class="field">`spot`</a> <span class="type">Integer</span>   

If you want to use capacity to run your services, you can specify a number under the `spot` subfield:
```yaml
count:
  spot: 5
```

