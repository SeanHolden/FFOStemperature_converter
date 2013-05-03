function clearInputField(){
  document.getElementById('number_value').value= "";
};

function farenheitToCelcius(){
    var farenheit_str = document.getElementById('number_value').value
    var farenheit_float = parseFloat(farenheit_str)
    var celcius = (5.0/9.0)*(farenheit_float-32)
    var result = celcius.toFixed(2)
    return result.toString()
};

function celciusToFarenheit(){
    var celcius_str = document.getElementById('number_value').value
    var celcius_float = parseFloat(celcius_str)
    var farenheit = ((9.0/5.0)*celcius_float)+32
    var result = farenheit.toFixed(2)
    return result.toString()
};

function convertButtonClicked(){
  var conv_type = document.getElementById('conversion_type').value
  switch(conv_type)
  {
  case "f_to_c":
    document.getElementById('result').innerHTML = "<p>"+farenheitToCelcius()+"&deg;C</p>"
    break;
  case "c_to_f":
    document.getElementById('result').innerHTML = "<p>"+celciusToFarenheit()+"&deg;F</p>"
    break;
  }
};

function conversionTypeChanged(){
  var conv_type = document.getElementById('conversion_type').value
  switch(conv_type)
  {
  case "f_to_c":
    setupFtoC();
    break;
  case "c_to_f":
    setupCtoF();
    break;
  }
};

// Set up units of measurement
function setupFtoC(){
  document.getElementById('measurement_unit').innerHTML = "&deg;F"
};

function setupCtoF(){
  document.getElementById('measurement_unit').innerHTML = "&deg;C"
};

window.onload = function(){
  document.getElementById('convert_button').onclick = function(){
    convertButtonClicked();
  };
  document.getElementById('number_value').onclick = function(){
    clearInputField();
  };
  document.getElementById('conversion_type').onchange = function(){
    conversionTypeChanged();
  };
};