(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{65:function(t,e,a){},69:function(t,e,a){"use strict";a.r(e);var n=a(6),i=a(0),s=a.n(i),o=a(10),l=a.n(o),r=(a(65),a(43)),c=a(44),h=a(50),d=a(49),j=a(70),b=a(104),A=a(105),u=a(106),p=a(71),x=a(107),O=a(108),f=a(109),G=a(110),g=a(111),m=a(112),y=a(113),N=a(114),Q=a(121),E=a(115),C=a(116),D=a(119),q=a(118),M=a(122),k=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).handleData=function(){n.setState({skip:n.state.skip,limit:n.state.limit}),fetch("http://localhost:8000/get_users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({skip:n.state.skip,limit:n.state.limit})}).then((function(t){return t.json()})).then((function(t){console.log(t.result),n.setState({users:t.result})}))},n.handleDelete=function(){fetch("http://localhost:8000/delete_user",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:n.state.delete_id})}).then((function(t){return t.json()})).then((function(t){console.log(t),!0===t.status?(n.handleData(),n.setState({open:!1})):n.setState({snack:!0,message:t.message})}))},n.handleOpen=function(){n.setState({open:!0})},n.handleCloseOpen=function(){n.setState({open:!1})},n.handleEdit=function(){n.setState({card:!0})},n.handleClose=function(){n.setState({card:!1})},n.handleClick=function(){fetch("http://localhost:8000/update_user",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:n.state.id,name:n.state.name,email:n.state.email})}).then((function(t){return t.json()})).then((function(t){console.log(t),n.setState({card:!1}),n.handleData()}))},n.handleRight=function(){n.setState({skip:parseInt(n.state.skip)+parseInt(n.state.limit),limit:n.state.limit}),fetch("http://localhost:8000/get_users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({skip:n.state.skip,limit:n.state.limit})}).then((function(t){return t.json()})).then((function(t){console.log(t),n.handleData()}))},n.handleLeft=function(){n.setState({skip:parseInt(n.state.skip)-parseInt(n.state.limit),limit:n.state.limit}),fetch("http://localhost:8000/get_users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({skip:n.state.skip,limit:n.state.limit})}).then((function(t){return t.json()})).then((function(t){console.log(t),n.handleData()}))},n.handleCloseSnackbar=function(){n.setState({snack:!1})},n.state={card:!1,open:!1,skip:0,limit:4,id:"",name:"",email:"",users:[],snack:!1,message:!1,delete_id:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.handleData()}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{style:{background:"url(data:image/jpeg;base64,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)",height:"100vh",backgroundSize:"cover"},children:[Object(n.jsx)(j.a,{variant:"h3",style:{fontFamily:"Serif",marginLeft:500,color:"brown",paddingTop:10},children:"Welcome to the User Table"}),Object(n.jsx)(b.a,{style:{height:500,width:1e3,marginLeft:250,marginTop:50},children:Object(n.jsx)(A.a,{children:Object(n.jsxs)(u.a,{component:p.a,children:[Object(n.jsxs)(x.a,{"aria-label":"simple table",children:[Object(n.jsx)(O.a,{children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(G.a,{children:"Name"}),Object(n.jsx)(G.a,{align:"right",children:"Email"}),Object(n.jsx)(G.a,{align:"right",children:"Delete Users"}),Object(n.jsx)(G.a,{align:"right",children:"Edit Users"})]})}),Object(n.jsx)(g.a,{children:this.state.users.map((function(e){return Object(n.jsxs)(f.a,{children:[Object(n.jsx)(G.a,{children:e.name}),Object(n.jsx)(G.a,{align:"right",children:e.email}),Object(n.jsx)(G.a,{align:"right",children:Object(n.jsx)(m.a,{onClick:function(){t.setState({delete_id:e._id,open:!0})},children:Object(n.jsx)(y.a,{children:"delete"})})}),Object(n.jsx)(G.a,{align:"right",children:Object(n.jsx)(N.a,{onClick:function(){t.setState({id:e._id,card:!0})},children:"Edit"})})]})}))})]}),Object(n.jsx)(m.a,{onClick:this.handleLeft,children:Object(n.jsx)(y.a,{children:"keyboard_arrow_left"})}),Object(n.jsx)(m.a,{onClick:this.handleRight,children:Object(n.jsx)(y.a,{children:"keyboard_arrow_right"})})]})})}),Object(n.jsxs)(Q.a,{open:this.state.card,onClose:this.handleClose,"aria-labelledby":"form-dialog-title",fullWidth:!0,children:[Object(n.jsx)(E.a,{id:"form-dialog-title",children:Object(n.jsx)(j.a,{variant:"h5",style:{fontFamily:"Serif",color:"darkblue"},children:"CHANGE YOUR NAME AND EMAIL ID"})}),Object(n.jsxs)(C.a,{children:[Object(n.jsx)(j.a,{style:{fontFamily:"Serif",color:"blue"},children:"Enter your new name:"}),Object(n.jsx)(D.a,{variant:"outlined",color:"primary",label:"Enter Your New Name",margin:"dense",fullWidth:!0,onChange:function(e){t.setState({name:e.target.value})}}),Object(n.jsx)("br",{}),Object(n.jsx)(j.a,{style:{fontFamily:"Serif",color:"blue"},children:"Enter your new email-id:"}),Object(n.jsx)(D.a,{variant:"outlined",color:"primary",label:"Enter Your New Email-Id",margin:"dense",fullWidth:!0,onChange:function(e){t.setState({email:e.target.value})}})]}),Object(n.jsxs)(q.a,{children:[Object(n.jsx)(N.a,{onClick:this.handleClose,color:"primary",children:"CANCEL"}),Object(n.jsx)(N.a,{onClick:this.handleClick,color:"primary",children:"ADD"})]})]}),Object(n.jsxs)(Q.a,{open:this.state.open,onClose:this.handleCloseOpen,"aria-labelledby":"form-dialog-title",fullWidth:!0,children:[Object(n.jsx)(E.a,{id:"form-dialog-title",children:Object(n.jsx)(j.a,{variant:"h5",style:{fontFamily:"Serif",color:"darkblue"},children:"DELETE ONE OBJECT"})}),Object(n.jsx)(C.a,{children:Object(n.jsx)(j.a,{style:{fontFamily:"Serif",color:"blue"},children:"Are you sure you want to delete this?"})}),Object(n.jsxs)(q.a,{children:[Object(n.jsx)(N.a,{onClick:this.handleCloseOpen,color:"primary",children:"CANCEL"}),Object(n.jsx)(N.a,{onClick:this.handleDelete,color:"primary",children:"DELETE"})]})]}),Object(n.jsx)(M.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.snack,autoHideDuration:1e4,onClose:this.handleCloseSnackbar,message:this.state.message,action:Object(n.jsx)(m.a,{onClick:this.handleCloseSnackbar,children:Object(n.jsx)(y.a,{style:{color:"white"},children:"close"})})})]})}}]),a}(s.a.Component),S=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,123)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;a(t),n(t),i(t),s(t),o(t)}))};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),S()}},[[69,1,2]]]);
//# sourceMappingURL=main.b884d508.chunk.js.map