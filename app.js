var box = document.getElementById('box');
var copy = document.getElementById('copy');
var mainValue = `box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75)`;
var shadowcolour = document.getElementById('shadowcolour');
var boxcolour = document.getElementById('boxcolour');
var Backgroundcolour = document.getElementById('backgroundcolour');
var togglebtn = document.querySelector('.togglebtn');
var count = 1;
var r = "0";
var g = "0";
var b = "0";

//*******************************************box shadow varibles ****************************//
var hrange = document.getElementById('hrange');
var hrangevalue = document.getElementById('hrangevalue');
var vrange = document.getElementById('vrange');
var vrangevalue = document.getElementById('vrangevalue');
var blurrange = document.getElementById('blurrange');
var blurrangevalue = document.getElementById('blurrangevalue');
var spreadrange = document.getElementById('spreadrange');
var spreadrangevalue = document.getElementById('spreadrangevalue');
var opacityrange = document.getElementById('opacityrange');
var opacityrangevalue = document.getElementById('opacityrangevalue');
var inset = document.getElementById('inset');
var insetvalue = "";


// ********************************box variables ********************************//

var widthrange = document.getElementById("widthrange");
var widthrangevalue = document.getElementById("widthrangevalue");
var heightrange = document.getElementById("heightrange");
var heightrangevalue = document.getElementById("heightrangevalue");
var borderrange = document.getElementById("borderrange");
var borderrangevalue = document.getElementById("borderrangevalue");

var bordertopleftrange = document.getElementById("bordertopleftrange");
var bordertopleftrangevalue = document.getElementById("bordertopleftrangevalue");
var bordertoprightrange = document.getElementById("bordertoprightrange");
var bordertoprightrangevalue = document.getElementById("bordertoprightrangevalue");
var borderbottomleftrange = document.getElementById("borderbottomleftrange");
var borderbottomleftrangevalue = document.getElementById("borderbottomleftrangevalue");
var borderbottomrightrange = document.getElementById("borderbottomrightrange");
var borderbottomrightrangevalue = document.getElementById("borderbottomrightrangevalue");

// updation of box-shadow
hrange.addEventListener('input', function () {
    hrangevalue.value = hrange.value;
    updateshadow();
})

hrangevalue.addEventListener('input', function () {
    hrange.value = hrangevalue.value;
    updateshadow();
});

vrange.addEventListener('input', function () {
    vrangevalue.value = vrange.value;
    updateshadow();
})

vrangevalue.addEventListener('input', function () {
    vrange.value = vrangevalue.value;
    updateshadow();
});

blurrange.addEventListener('input', function () {
    blurrangevalue.value = blurrange.value;
    updateshadow();
})

blurrangevalue.addEventListener('input', function () {
    blurrange.value = blurrangevalue.value;
    updateshadow();
});

spreadrange.addEventListener('input', function () {
    spreadrangevalue.value = spreadrange.value;
    updateshadow();
})

spreadrangevalue.addEventListener('input', function () {
    spreadrange.value = spreadrangevalue.value;
    updateshadow();
});

opacityrange.addEventListener('input', function () {
    opacityrangevalue.value = `0.${opacityrange.value}`;
    updateshadow();
})

opacityrangevalue.addEventListener('input', function () {
    opacityrange.value = opacityrangevalue.value;
    updateshadow();
});

shadowcolour.addEventListener("input", () => {
    var ev = shadowcolour.value;
    r = parseInt(ev.substr(1, 2), 16)
    g = parseInt(ev.substr(3, 2), 16)
    b = parseInt(ev.substr(5, 2), 16)
    updateshadow();
});

function applyinset() {
    count++;
    if (count % 2 == 0) {
        insetvalue = inset.value;
        updateshadow()
    } else {
        insetvalue = "";
        updateshadow()
    }
}

function updateshadow() {
    mainValue = `${insetvalue} ${hrangevalue.value}px ${vrangevalue.value}px ${blurrangevalue.value}px ${spreadrangevalue.value}px rgba(${r},${g},${b},${opacityrangevalue.value})`
    box.style.boxShadow = mainValue;
    copy.innerHTML = `box-shadow: ${mainValue}`;
}

// copy function 
function copycode() {
    window.navigator.clipboard.writeText(`box-shadow: ${mainValue}`);
    document.querySelector(".button").innerHTML = "copied!"
}
// box color change
boxcolour.addEventListener("input", function () {
    box.style.backgroundColor = boxcolour.value;
});
// background colour change
Backgroundcolour.addEventListener("input", function () {
    document.body.querySelector(".outputs").style.backgroundColor = Backgroundcolour.value;
})


// toggle box dimension

togglebtn.addEventListener("click", function () {
    document.querySelector(".boxdimension").classList.toggle("open");
    document.querySelector(".fa-solid").classList.toggle("fa-chevron-right");
})

// updation of box dimension
borderrange.addEventListener('input', function () {
    borderrangevalue.value = borderrange.value;
    borderupdate();
})

borderrangevalue.addEventListener('input', function () {
    borderrange.value = borderrangevalue.value;
    borderupdate();
});


bordertopleftrange.addEventListener('input', function () {
    bordertopleftrangevalue.value = bordertopleftrange.value;
    updateBox();
})

bordertopleftrangevalue.addEventListener('input', function () {
    bordertopleftrange.value = bordertopleftrangevalue.value;
    updateBox();
});

bordertoprightrange.addEventListener('input', function () {
    bordertoprightrangevalue.value = bordertoprightrange.value;
    updateBox();
})

bordertoprightrangevalue.addEventListener('input', function () {
    bordertoprightrange.value = bordertoprightrangevalue.value;
    updateBox();
});



borderbottomleftrange.addEventListener('input', function () {
    borderbottomleftrangevalue.value = borderbottomleftrange.value;
    updateBox();
})

borderbottomleftrangevalue.addEventListener('input', function () {
    borderbottomleftrange.value = borderbottomleftrangevalue.value;
    updateBox();
});

borderbottomrightrange.addEventListener('input', function () {
    borderbottomrightrangevalue.value = borderbottomrightrange.value;
    updateBox();
})

borderbottomrightrangevalue.addEventListener('input', function () {
    borderbottomrightrange.value = borderbottomrightrangevalue.value;
    updateBox();
});

widthrange.addEventListener('input', function () {
    widthrangevalue.value = widthrange.value;
    updateBox();
})

widthrangevalue.addEventListener('input', function () {
    widthrange.value = widthrangevalue.value;
    updateBox();
});

heightrange.addEventListener('input', function () {
    heightrangevalue.value = heightrange.value;
    updateBox();
})

heightrangevalue.addEventListener('input', function () {
    heightrange.value = heightrangevalue.value;
    updateBox();
});


function updateBox() {
    box.style.width = `${widthrangevalue.value}px`;
    box.style.height = `${heightrangevalue.value}px`;
    box.style.borderTopLeftRadius = `${bordertopleftrangevalue.value}px`;
    box.style.borderTopRightRadius = `${bordertoprightrangevalue.value}px`;
    box.style.borderBottomLeftRadius = `${borderbottomleftrangevalue.value}px`;
    box.style.borderBottomRightRadius = `${borderbottomrightrangevalue.value}px`;
}

function borderupdate() {
    box.style.borderRadius = `${borderrangevalue.value}px`;
}