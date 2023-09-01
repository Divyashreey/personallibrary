let book=[
   { title:"wings of Fire",
    author:"Dr.A.P.J Abdul kalam",
    Yearofpublish:1999,
    readstatus:"true"
   },
    
{
    title:"The Little Book of Encouragement",
    author:"Dalai Lama",
    Yearofpublish:2021,
    readstatus:"true"
},
{
    title:"A Child of Destiny",
    author:"K. Ramakrishna Rao",
    Yearofpublish:2020,
    readstatus:"false"
},
{
    title:"The Line of Beauty",
    author:"Alan Hollinghurst",
    Yearofpublish:1980,
    readstatus:"true"
},
{
    title:"Get a Life, Chloe Brown",
    author:"Talia Hibbert ",
    Yearofpublish:2019,
    readstatus:"false"
},
{
    title:"Romantic Comedy",
    author:"Curtis Sittenfeld",
    Yearofpublish:2023,
    readstatus:"true"
},
];
function getSummary(){
    for(let i=0;i<book.length;i++){
        document.write(book[i].title+" "+book[i].author+" "+book[i].Yearofpublish+"</br>");
    }
}
function  togglereadingStatus()
   {
    for (let i = 0; i < book.length; i++)
    {
       if(book[i].readstatus=="true")
       {
        document.write(book[i].title+"-->Already Read"+"</br>");
       }
       else
       {
        document.write(book[i].title+"-->You still need to read the book"+"</br>");
       }
   }
}
let lib=[];
for(let i=0;i<book.length;i++){
    lib[i]=book[i];
}
function addBook(){
    lib.push({title:prompt("Book Title to be added?",""),author:prompt("Book author to be added?",""),Yearofpublish:prompt("Book Year of publish to be added?",""),readstatus:prompt("Have you Read the book?","")});
    alert("Book is added");
    lib.forEach(b=>{
        for(let value in b){
            document.write(`${b[value]+"</br>"}`);
        }
        document.write("<br/>");
      })
}
function removelastBook(){
    lib.pop();
    alert("Book is removed");
    lib.forEach(b=>{
        for(let value in b){
            document.write(`${b[value]+"</br>"}`);
        }
        document.write("<br/>");
      })
}
function addBookfront(){
    lib.unshift({title:prompt("Book Title to be added?",""),author:prompt("Book author to be added?",""),Yearofpublish:prompt("Book Year of publish to be added?","")});
    alert("Book is added");
    lib.forEach(b=>{
        for(let value in b){
            document.write(`${b[value]+"</br>"}`);
        }
        document.write("<br/>");
      })
}
function removefirstBook(){
    lib.shift();
    alert("Book is removed");
    lib.forEach(b=>{
        for(let value in b){
            document.write(`${b[value]+"</br>"}`);
        }
        document.write("<br/>");
      })
}
function getAllTitle(){
    let gettitle=(books)=>books.map((book)=>book.title);
    book.title.forEach(b=>{
        for(let value in b){
            document.write(`${b[value]+"</br>"}`);
        }
        document.write("<br/>");
      })
   
}
function getBookByAuthor()
{
 let str=prompt(" Give the name of the Author to be find?")  
let authors=lib.filter(function(a)
{
    return a.author===str;   
});
document.write("</br>")
authors.forEach(b=>{
  for(let value in b){
      document.write(`${b[value]+"</br>"}`);
  }
  document.write("<br/>");
})
}
function getBooksPublishedBefore(){
    let year=prompt("year to be known?");
let yearpublish=lib.filter(function (b)
    {
    return b.Yearofpublish < year;
});
document.write("</br>")
yearpublish.forEach(b1=>{
  for(let value in b1){
      document.write(`${b1[value]+"</br>"}`);
  }
  document.write("<br/>");
})
}
function removeBookByTitle(title1){
if(title1==book.title){
    let c=book.indexOf(title1);
}
}
function getBooksByReadStatus()
{
    let status=prompt("Enter reading status");
  let bk=lib.filter(function(el)
  {
    return el.readstatus==status;
  });
  document.write("</br>")
  bk.forEach(b=>{
    for(let value in b){
        document.write(`${b[value]+"</br>"}`);
    }
    document.write("<br/>");
  })
}
function getSubLibrary()
{  
   let start=prompt("Start");
    let end=prompt("End");
   let bk=lib.slice(start,end);
   document.write("</br>")
   bk.forEach(b=>{
    for(let value in b)
    {
        document.write(`${b[value]+"<br/>"}`);
    }
    document.write("<br/>");
   })
}
//getBooksPublishedBefore(prompt("year to be known?"));
//getBookByAuthor(prompt("Author?"));
//addBook();
//getSummary();
//removelastBook();
//addBookfront();
//removefirstBook();
//getAllTitle();
//getBooksByReadStatus();
//getSubLibrary();
