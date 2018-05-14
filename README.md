# ansible-grunt
A Ansible role to run Grunt tasks

## Parameters

| Name             | Default | Description |
| ---------------- | ------- | ----------- |
| grunt_executable |         | Path to `grunt` executable to use. |
| task             |         | Task to execute |
| chdir            | .       | Location of a project |

## Examples

~~~yaml
# Run default task
- tomi77.grunt

# Use locally installed grunt
- role: tomi77.grunt
  grunt_executable: ./node_modules/.bin/

# Run build task
- role: tomi77.grunt
  task: build

# Specify project location
- role: tomi77.grunt
  chdir: /location/of/a/project
~~~
