let categorySelection = function() {
                addTavar();
                categories.addEventListener('click', function (event) {
                    if (event.target && event.target.innerHTML == 'Макияж') {
                        item.remove();
                        if (catalogProduct[i].category == 'make') {
                            addTavar();
                        }
                    }
                    
                    
                    if (event.target && event.target.value == 'b1') {
                        item.remove();
                        if (catalogProduct[i].make == 'smoki') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b2') {
                        item.remove();
                        if (catalogProduct[i].make == 'str') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b3') {
                        item.remove();
                        if (catalogProduct[i].make == 'cat_eye') {
                            addTavar();
                        }
                    }
                    
                    if (event.target && event.target.value == 'b4') {
                        item.remove();
                        if (catalogProduct[i].make == 'pet') {
                            addTavar();
                        }
                    }
                    
                    if (event.target && event.target.value == 'b5') {
                        item.remove();
                        if (catalogProduct[i].color == 'black') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b6') {
                        item.remove();
                        if (catalogProduct[i].color == 'brown') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b7') {
                        item.remove();
                        if (catalogProduct[i].cost == '50') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b8') {
                        item.remove();
                        if (catalogProduct[i].cost  == '40') {
                            addTavar();
                        }
                    }
                    
                });
                
            }
function k() {
    console.log('test');
}