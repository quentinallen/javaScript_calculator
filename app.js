// function that sends number inputs to textview
function insert(num){
  document.form.textview.value=document.form.textview.value + num;
};

// function for equal sign
function equal(){
  let exp = document.form.textview.value;
  if(exp){
    document.form.textview.value = eval(exp);
  };

};

// function for clearing the text view
function clean(){
  document.form.textview.value = "";
};

//function for backspace button
function back(){
  let exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length-1);
}
