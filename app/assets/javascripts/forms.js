function reg() {
  var x=document.getElementById('input1').value;
  var y=document.getElementById('input2').value;
  var regex=/^([\w\s]+.+)/;
  var z=regex.test(x);
  console.log(z);
  if (z==true && y!=='') {
    if (x=='smitty'||x=='n@m3'||x=='jameson'||x=='Captain Hook'||x=='I_want_to_sail_too'){
      alert('Username accepted');
    }
    else{
      alert('username not accepted');
      return false;
    }
  }
  else{
    alert('Please fill data correctly');
    var x=document.getElementById('input1').value;
    var y=document.getElementById('input2').value;
    var regex=/^([\w\s]+.+)/;
    var z=regex.test(x);
    console.log(z);
    if (z==true && y!=='') {
      if (x=='smitty'||x=='n@m3'||x=='jameson'||x=='Captain Hook'||x=='I_want_to_sail_too'){
        alert('Username accepted');
      }
      else{
        alert('username not accepted');
        return false;
      }
    }
    else{
      alert('Please fill data correctly');
    }
  }
}