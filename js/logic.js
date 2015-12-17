google.visualization.events.addListener(data, 'click', calcPop);
function calcPop(){
  var selectedItem = data.getSelection()[0];
  if (selectedItem){
    var value = data.getValue(selectedItem.row, selectedItem.column);
    $('.densityCalc').append(value);
  }
}
