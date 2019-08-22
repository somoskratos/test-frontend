# teste-frontend
* Implementação do [desafio kratos frontend](https://github.com/somoskratos/test-frontend "kratos frontend").

##### Técnologias:
```
ES6
Node.js >= 10.0.0
Vue.js >= 3.0.0 
Yarn >= 1.0.2
```
### Setup do projeto
> Adicione o arquivo .env.local na raiz do projeto (pŕóximo ao package.json) contendo a url da api (um exemplo está no arquivo .env.example)

``` 
yarn install
```

### Compila e serve na porta 3030 com hot-reload para desenvolvimento
> Servindo na porta 3030. Para alterar, editar a entrada 'serve' no package.json

```
yarn serve
```
Ex:
>App running at:
  - Local:   http://localhost:3030/
  - Network: http://192.168.1.12:3030/

### Rotas 
<ol>
<li><b>/companies </b> - lista de empresas</li>
	<ol>
	<li><b>/companies/<i>:id</i> </b> - dashboard da empresa selecionada</li>
	</ol>
</ol>

### Arquitetura
• Padrão MVC com as 3 camadas modularizadas para facilitar a implementação de outras layers: autenticação, validação e etc.

<html>
<ol>
<li> <b>Model</b> <i>Vuex</i>

->[src/config/store](https://github.com/Thrashattack/test-frontend/tree/teste-carlos-cunha/src/config/store "src/config/store").

• <b>Módulos</b> <i>Store</i>

``` 
companies - "Lista de Empresas, Lista de Documentos, etc..." 
company  - "Endereço, Nome, CNPJ, etc..." 
``` 

</li> 
<li> <b>View</b> 

-> [src/views](https://github.com/Thrashattack/test-frontend/tree/teste-carlos-cunha/src/views "src/views")

• <b>Telas</b>

```
CompaniesList - A lista das empresas
Company - Dashboard da empresa selecionada
Companies - Tela raiz do módulo de empresas
```

</li>
<li> <b>Controller</b>

-> [src/config/router](https://github.com/Thrashattack/test-frontend/tree/teste-carlos-cunha/src/config/router "src/config/router").

• <b>Rotas</b> <i>Vue Router</i>

```
'/companies' - Rota raiz da aplicação
	|
	|
	----> '/' - Lista de Empresas
	|
	|
	----> '/:id' - Dashboard da empresa selecionada
```

</li>
</ol>

### Componentes

• Para efeitos de escalabilidade os componentes foram modularizados em :
```
Companies
Documents
Templates
```
-> [src/components](https://github.com/Thrashattack/test-frontend/tree/teste-carlos-cunha/src/components "src/components")

### Estilos 
<i>Scss</i>
• O arquivo de variáveis de estilo é carregado via [vue.config.js](https://github.com/Thrashattack/test-frontend/blob/teste-carlos-cunha/vue.config.js) através do css loader

-> [src/config/scss](https://github.com/Thrashattack/test-frontend/tree/teste-carlos-cunha/src/config/scss "src/config/scss")

> Todo os valores foram obtidos no figma disponibilizado junto com o teste, exceto tamanhos padrão de dispositivos.


[kratosfrontend]: https://github.com/somoskratos/test-frontend "kratos frontend"
[src/config/store]: https://github.com/Thrashattack/test-frontend/tree/teste-carlos-cunha/src/config/store "src/config/store"
[src/views]: https://github.com/Thrashattack/test-frontend/tree/teste-carlos-cunha/src/views "src/views"
[src/config/router]: https://github.com/Thrashattack/test-frontend/tree/teste-carlos-cunha/src/config/router "src/config/router"
[src/config/scss]: https://github.com/Thrashattack/test-frontend/tree/teste-carlos-cunha/src/config/scss "src/config/scss"
[vue.config.js]: https://github.com/Thrashattack/test-frontend/blob/teste-carlos-cunha/vue.config.js "vue.config.js"
