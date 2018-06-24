# ansible-grunt
A Ansible role to run Grunt tasks

## Parameters

| Name             | Default | Description |
| ---------------- | ------- | ----------- |
| grunt_executable |         | Path to `grunt` executable to use. |
| task             |         | Task (or tasks) to execute |
| chdir            | .       | Location of a project |
| node_version     |         | NVM Node.js version tag |
| nvm_init_script  |         | Path to BASH script that activate NVM |

## Returns

Fact ``grunt_output`` contains shell output.

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

# Run tasks
- role: tomi77.grunt
  task:
  - prepare
  - build
  - clean

# Run in NVM
- role: tomi77.grunt
  node_version: stable
  nvm_init_script: /home/travis/.nvm/nvm.sh
~~~
