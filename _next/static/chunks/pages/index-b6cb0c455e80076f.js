(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5901)}])},5901:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var a=n(5893),o=n(7294);function s(){let[e,t]=(0,o.useState)(-1),[n,s]=(0,o.useState)(""),[i,c]=(0,o.useState)(""),[l,r]=(0,o.useState)([]);function d(){fetch("https://usuariosapi.onrender.com/api/usuarios").then(function(e){if(!e.ok)throw"Requisi\xe7\xe3o chegou no servidor, mas servidor retornou com erro: "+e.statusText;return e.json()}).then(function(e){console.log(e),r(e)}).catch(function(e){console.log(e)})}function u(e){let n=e.target.dataset.idUsuarioEditar;n||(n=e.target.parentElement.dataset.idUsuarioEditar);let a=l.find(e=>e.id==n);console.log("editando ".concat(n," ").concat(a.nome," ").concat(a.email)),t(a.id),s(a.nome),c(a.email)}function m(e){let t=e.target.dataset.idUsuarioEditar;t||(t=e.target.parentElement.dataset.idUsuarioEditar),fetch("https://usuariosapi.onrender.com/api/usuarios/".concat(t),{method:"DELETE"}).then(function(e){return e.json()}).then(function(e){console.log(e),d()}).catch(function(e){console.log(e)})}return(0,o.useEffect)(()=>{d()},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("main",{className:"container",style:{maxWidth:"800px"},children:[(0,a.jsxs)("div",{className:"d-flex align-items-center justify-content-center gap-2",children:[(0,a.jsx)("img",{src:"user.png",alt:"Imagem de usu\xe1rio"}),(0,a.jsx)("h1",{className:"my-5",children:"Cadastro de usu\xe1rios"})]}),(0,a.jsxs)("form",{className:"d-flex flex-column flex-md-row gap-2",children:[(0,a.jsxs)("div",{className:"flex-md-grow-1 mt-1",children:[(0,a.jsx)("label",{htmlFor:"nome",className:"form-label",children:"Nome"}),(0,a.jsx)("input",{type:"nome",className:"form-control",id:"nome",value:n,onChange:e=>s(e.target.value)})]}),(0,a.jsxs)("div",{className:"flex-md-grow-1 mt-1",children:[(0,a.jsx)("label",{htmlFor:"email",className:"form-label",children:"E-mail"}),(0,a.jsx)("input",{type:"email",className:"form-control",id:"email",value:i,onChange:e=>c(e.target.value)})]}),(0,a.jsx)("div",{className:"mt-1 align-self-md-end",children:(0,a.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(a){a.preventDefault(),console.log("cadastrando ".concat(n," ").concat(i)),-1==e?(console.log("novo usuario",e),fetch("https://usuariosapi.onrender.com/api/usuarios",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nome:n,email:i})}).then(function(e){if(!e.ok)throw"Requisi\xe7\xe3o chegou no servidor, mas servidor retornou com erro: "+e.statusText;return e.json()}).then(function(e){console.log(e),s(""),c(""),r([...l,e])}).catch(function(e){console.log(e)})):(console.log("atualizando usuario",e),fetch("https://usuariosapi.onrender.com/api/usuarios/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,nome:n,email:i})}).then(function(e){return e.json()}).then(function(e){console.log(e),t(-1),s(""),c(""),d()}).catch(function(e){console.log(e)}))},"data-id-usuario-cadastrar":e,children:"Cadastrar"})})]}),(0,a.jsxs)("table",{className:"table table-hover mt-5",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"d-fex align-middle",children:[(0,a.jsx)("th",{children:"#"}),(0,a.jsx)("th",{children:"Nome"}),(0,a.jsx)("th",{children:"E-mail"}),(0,a.jsx)("th",{className:"text-center",children:"Ac\xf5es"})]})}),(0,a.jsx)("tbody",{children:l.map((e,t)=>(0,a.jsxs)("tr",{className:"align-middle",children:[(0,a.jsx)("th",{children:t+1}),(0,a.jsx)("td",{children:e.nome}),(0,a.jsx)("td",{children:e.email}),(0,a.jsxs)("td",{className:"text-center",children:[(0,a.jsx)("button",{className:"btn btn-outline-secondary ms-2","data-id-usuario-editar":e.id,onClick:u,children:(0,a.jsx)("i",{className:"bi bi-pencil"})}),(0,a.jsx)("button",{className:"btn btn-outline-danger ms-2","data-id-usuario-editar":e.id,onClick:m,children:(0,a.jsx)("i",{className:"bi bi-trash"})})]})]},e.id))})]})]})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);