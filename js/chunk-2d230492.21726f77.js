(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230492"],{ec42:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-container",[l("v-form",[l("v-row",[l("v-col",{attrs:{lg:"7"}},[l("v-text-field",{attrs:{label:"task name"},model:{value:t.taskName,callback:function(e){t.taskName=e},expression:"taskName"}})],1),l("v-col",{attrs:{lg:"4"}},[l("v-select",{attrs:{clearable:"",label:"task types",multiple:"",outlined:"",solo:"",dense:"",chips:"",items:t.selectType},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),l("v-col",{attrs:{lg:"1"}},[l("v-select",{attrs:{outlined:"",solo:"",dense:"",label:"difficulty",items:t.selectDifficulty},model:{value:t.difficulty,callback:function(e){t.difficulty=e},expression:"difficulty"}})],1)],1)],1),t._l(t.filteredTasks,(function(t){return l("question-item",{key:t.id,attrs:{questionData:t}})}))],2)},i=[],s=(l("4de4"),l("caad"),l("2532"),l("9c57")),n=l("dd5a"),c={components:{QuestionItem:s["a"]},data:function(){return{taskName:null,selectType:["JS","HTML","CSS","VUE","Algoritms"],type:null,selectDifficulty:[1,2,3,4,5],difficulty:null,questionsData:n}},computed:{filteredTasks:function(){var t=this,e=this.questionsData;return this.taskName&&(e=e.filter((function(e){return e.title.toLowerCase().includes(t.taskName.toLowerCase())}))),this.difficulty&&(e=e.filter((function(e){return e.difficulty<=t.difficulty}))),this.type&&(e=e.filter((function(e){return t.type.includes(e.type)}))),e}}},u=c,o=l("2877"),r=l("6544"),f=l.n(r),d=l("62ad"),p=l("a523"),m=l("4bd4"),y=l("0fd9"),k=l("b974"),v=l("8654"),b=Object(o["a"])(u,a,i,!1,null,null,null);e["default"]=b.exports;f()(b,{VCol:d["a"],VContainer:p["a"],VForm:m["a"],VRow:y["a"],VSelect:k["a"],VTextField:v["a"]})}}]);
//# sourceMappingURL=chunk-2d230492.21726f77.js.map