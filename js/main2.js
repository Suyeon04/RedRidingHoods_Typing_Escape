const div2 = document.getElementsByClassName("div2");
const goal = document.querySelector('.goal');

let value = 0;
let goal_1 = 0;
let real_choice = 0;


function handleClick(event) {
  console.log(event.target);
  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (let i = 0; i < div2.length; i++) {
      div2[i].classList.remove("clicked");
      
    }
    value = event.target.id;
    event.target.classList.add("clicked");
  }
}

function init() {
  for (let i = 0; i < div2.length; i++) {
    div2[i].addEventListener("click", handleClick);
  }
}
goal.oninput = function() {
  this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  goal_1 = goal.value;
};
//랜덤모드

function choice(value){
  switch(value){
    case '1': 
      real_choice= 
`asdf asdf
nanananana
12345678`
      break;
    case '2':
      real_choice=
`import java.util.Scanner;
public class 사칙연산{
public static void main(String args[]){
Scanner scan = new Scanner(System.in);
System.out.print("첫번째 정수 입력 : ");
int a = scan.nextInt();
System.out.print("두번째 정수 입력 : ");
int b = scan.nextInt();
System.out.println("정수 1 : "+a);
System.out.println("정수 2 : "+b);
int c = 0;
if(a*b>0){
System.out.print("세번째 정수 입력 : ");
c = scan.nextInt();
System.out.println(a +" * " +b+ " - " +c+ " = " +(a*b-c)); }
else
System.out.println("ERROR 발생"); } }`;
      break;
    case '3' :
        real_choice =  
`#define _CRT_SECURE_NO_WARNINGS
#include <iostream>
#include <vector>
using namespace std;
struct Book {
string title;
int gread; };
bool FillBooklist(Book& b) {
cout << "책 제목 입력 : ";
cin >> b.title;
if (b.title == "quit")
return false;
cout << "책 등급 입력 : ";
cin >> b.gread;
return true; }
void ShowBooklist(Book b) {
cout << "책 제목 : " << b.title << ",   책 등급 : " << b.gread << endl;; }
int main() {
vector<Book> booklist;
Book temp;
int i = 0;
while (FillBooklist(temp)) {
booklist.push_back(temp); }
int num = booklist.size();
cout << "num : " << num << endl;
vector<Book>::iterator ptr;
for (ptr = booklist.begin(); ptr != booklist.end(); ptr++) {
ShowBooklist(*ptr); }
vector<Book> oldlist(booklist);
for (i = 0; i < num; i++)
ShowBooklist(oldlist[i]);
booklist.erase(booklist.begin()+1, booklist.begin() + 4);
for (ptr = booklist.begin(); ptr != booklist.end(); ptr++)
ShowBooklist(*ptr);
booklist.insert(booklist.begin(), oldlist.begin() + 1, oldlist.begin() + 3);
for (ptr = booklist.begin(); ptr != booklist.end(); ptr++)
ShowBooklist(*ptr);
booklist.swap(oldlist);
for (ptr = booklist.begin(); ptr != booklist.end(); ptr++) {
ShowBooklist(*ptr); } }`
        break;
        case '4' :
          real_choice = 
`#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
int solution(int value, char* unit) {
int converted = 0;
if (unit[0] == 'C')
converted = value * 1.8 + 32;
if (unit[0] == 'F')
converted = (value - 32) / 1.8;
return converted; }
int main() {
int value = 527;
char* unit = "C";
int ret = solution(value, unit);
printf("solution 함수의 반환 값은 %d 입니다.", ret);
value = 980;
unit = "F";
ret = solution(value, unit);
printf("solution 함수의 반환 값은 %d 입니다.", ret); }`  
break;
        case '5' :
          real_choice = 
`<%@ page language="java" contentType="text/html; 
charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Directive Tag</title>
</head>
<body>
<%@ include file="header_1.jsp" %>
<h4>------ 현재페이지------</h4>
<%! int pageCount = 0;
void addCount(){
pageCount++; } %>
<% addCount(); %>
<p> 이 사이트 방문은 <%=pageCount %>번째 입니다. <br>
<%@ include file="footer_1.jsp" %>
</body>
</html> }`
break;
case '6' :
          real_choice = 
`<?xml version="1.0" encoding="utf-8"?>
<ScrollView
xmlns:android="http://schemas.android.com/apk/res/android"
android:layout_width="match_parent"
android:layout_height="match_parent">
<LinearLayout
android:orientation="vertical"
android:layout_width="match_parent"
android:layout_height="match_parent">
<TextView
android:id="@+id/question"
android:gravity="center"
android:paddingTop="20dp"
android:layout_marginBottom="20dp"
android:textSize="24sp"
android:layout_width="match_parent"
android:layout_height="wrap_content"/>
<LinearLayout
android:id = "@+id/choices"
android:orientation="vertical"
android:layout_width="match_parent"
android:layout_height="wrap_content">
</LinearLayout>
</LinearLayout>
</ScrollView>`
break;
case '7' :
          real_choice = 
`#myProgress{
margin-left: 200px;
width: 1130px;
clear: right;
height: 100px;
overflow:hidden; }
#myBar {
width: 50%;
height: 30px;
background-color: #d2e009;
text-align: center;
line-height: 30px;
color: white;
margin-top: 40px; }
#myBar1 {
width: 50%;
height: 30px;
background-color: #04AA6D;
text-align: center;
line-height: 30px;
color: white;
margin-top: 40px; }
#tree{
position :absolute;
top:10px; 
left: 740px;
width: 50px;
height: 50px; }`
break;
case '8' :
          real_choice = 
`<?php include('./db_conn.php');
$_title=$_POST['title'];
$_author=$_POST['author'];
$_price=$_POST['price'];
$_description=$_POST['description'];
$f_name=$_FILES['image']['name'];
$uploads_dir='uploads2/';
$upload_file=$uploads_dir.basename($_FILES['image']['name']);
if(move_uploaded_file($_FILES['image']['tmp_name'], $upload_file)){
echo "파일 업로드 성공"; }
else echo "파일 업로드 실패";
$sql = "insert into book(title ,author ,price ,img ,description) 
values('$_title', '$_author', $_price, '$upload_file', '$_description')";
mysqli_query($conn, $sql);
echo "추가되었습니다"; ?>
<a href="index.php">불러오기</a>`
break;
case '9' :
          real_choice = 
`function pow(x, n) {
let result = x;
for (let i = 1; i < n; i++) {
result *= x;
}return result; }
let x = prompt("x?", '');
let n = prompt("n?", '');
if (n < 1) { 
alert("${n}은 양의 정수이어야 합니다.");
} else { alert( pow(x, n) ); }`
break;
case '10' :
real_choice = 
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
table {
width: 50%;
border-top: 1px solid #444444;
border-collapse: collapse; }
th, td {
border-bottom: 1px solid #444444;
padding: 10px; }
input:focus { background:rgb(250, 217, 157); }
</style>
</head>
<body>
<form method="post" action="insert.php" enctype="multipart/form-data">
<table  cellspacing=0 cellpadding=0>
<tr><td >제목: <input type="text" name="title" size="10">
<tr><td >저자: <input type="text" name="author" size="10">
<tr><td >가격: <input type="text" name="price" size="10">
<tr><td >표지: <input type="file" name="image" size="10">
<tr><td >상세정보: <input type="text" name="description" size="10">
<tr><td style="border-bottom:0" colspan="2" align="center">
<button type="submit">입력완료</button></td></tr>
</table>
</form> 
</body>
</html>`
  }

}

let cnt = 1;
let audio123 = new Audio("./Asteria-13-Memory Of Kritias.mp3");
audio123.volume = 0.3;
audio123.loop = true;
if(localStorage.getItem('cnt')){
    cnt = localStorage.getItem("cnt");
    cnt = 1;
    imgbtn();
}

function imgbtn(){
  if(cnt%2==1){
    document.getElementById("musicbtn").src="images/false.png";
    cnt = 1;
    audio123.pause();
  }else{
    document.getElementById("musicbtn").src="images/true.png";
    cnt = 0;
    audio123.play();
  }
  localStorage.setItem("cnt",cnt);
  cnt++;
}




function start()  {
  if(value == 0){
    alert("코드를 선택해주세요")
  }
  else if(goal_1 == 0){
    alert("목표 타수를 설정해주세요")
  }
  else{
    choice(value);
    localStorage.setItem("goal",goal_1);
    let x = real_choice.split('\n');
    localStorage.setItem("words",JSON.stringify(x));
    /*다른화면으로 넘어가는 부분 */
    location.replace('./html/ready.html');
  }
}
init();