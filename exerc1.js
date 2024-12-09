
/*  var age=prompt("donner votre age");
 alert("votre age="+age);*/
 var ligne=document.getElementById(ligne1),value;
 var colonne=document.getElementById(colonne1),value;
 var ligne=prompt("donner le nombre des lignes");
 alert("ligne="+ligne);
 var colonne=prompt("donner le nombre des colonnes");
 alert("colonnes="+colonne);
document.write("<h1>exemple</h1>");
document.write("<table>");
for(i=0;i<ligne;i++){
    document.write("<tr>");
    for(j=0;j<colonne;j++){
        document.write("<td>"+j+"</td>");
    }document.write("</tr>");
}document.write("</table");
