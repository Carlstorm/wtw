import GetMovies from "./GetMovieService.js";
let getMovie = new GetMovies();

export default class FrontPanimation {
    constructor() {
        // 3d
        this.scene;
        this.camera;
        this.renderer;
        this.starGeo;
        this.stars;
        this.star;
        this.target = false;
        this.checker = false;
        this.value = [];
        this.allownext = true;
        this.FDpos = 0;
    }

    FixRezise() {
        this.renderer.setSize(window.innerWidth, 500);
    }


threejsstuff(THREE) {
this.scene = new THREE.Scene();
this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
this.camera.position.z = 1;
this.camera.rotation.x = Math.PI/2;

this.renderer = new THREE.WebGLRenderer({ alpha: true });
this.renderer.setSize(window.innerWidth, 500);
document.getElementById("starlayer").appendChild(this.renderer.domElement);
    
this.starGeo = new THREE.Geometry();
for (let i=0; i<4000; i++) {
    let star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
    );
    star.velocity = 0;
    star.acceleration = 0.001;
    this.starGeo.vertices.push(star);
}
let sprite = new THREE.TextureLoader().load("./images/star.png")
let starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7,
    map: sprite
});

this.stars = new THREE.Points(this.starGeo,starMaterial);
this.scene.add(this.stars)
    this.Animate();
}

Animate() {
    let video = document.getElementById("vid");
    let restart = true;
    let vidstage = 0;

    // animation loop =>
    dada(this.starGeo, this.stars, this.renderer, this.scene, this.camera);
    function dada(starGeo, stars, renderer, scene, camera) {
    // 3d things
        starGeo.vertices.forEach(p=>{
        p.velocity += p.acceleration;
        p.y -= p.velocity;
        if(p.y <-200) {
            p.y = 200;
            p.velocity = 0;
        }
    });

    starGeo.verticesNeedUpdate = true;
    stars.rotation.y += 0.000075;
    renderer.render(scene, camera);

    if ( window.scrollY <= 500) {
        stars.rotation.x = -(window.scrollY/500)
    }
    
    // vid things
    if (restart) {
        restart = false;
        video.currentTime = vidstage*5;
        video.play()
    }
    if (video.currentTime > ((vidstage*5)+4.9)) {
        restart = true;
    }

    // callback
    // console.log(1)
    if (window.location.hash == "#home") {
        window.requestAnimationFrame(function() {
            dada(starGeo, stars, renderer, scene, camera);
        })
    }
}

    // hover genre front header 
    document.getElementById("frontpageheader").addEventListener("mouseover", function(e) {
    restart = true;
    if (e.target.classList.contains("genrebut")) {
        vidstage = parseInt(e.target.id, 10)
    } else {
        vidstage = 0;
    }
})

}

Fsection2menufunk(e) {
this.target = e.target

if (e.target.id == "Gbut") {
    showmenu("Gbut", "genreoptionFp");
    this.checker = true;
} else {
    setTimeout(target => {
        if (!this.target.classList.contains("gfhover") && this.target.id != "Gbut") {
            hidemenu("Gbut", "genreoptionFp");
        }
    }, 300)
}

if (e.target.id == "Sbut") {
    showmenu("Sbut", "sortoptionFp");
    this.checker = true;
} else {
    setTimeout(target => {
        if (!this.target.classList.contains("gfhover") && this.target.id != "Sbut") {
            hidemenu("Sbut", "sortoptionFp");
        }
    }, 300)
}

function showmenu(button, menu) {
    document.getElementById(menu).children[0].style.height = "130px";
    document.getElementById(menu).children[0].style.opacity = 1;
    document.getElementById(button).style.background = "white"
    document.getElementById(button).style.color = "black"
}

function hidemenu(button, menu) {
    document.getElementById(menu).children[0].style.height = "0px";
    document.getElementById(menu).children[0].style.opacity = 0;
    document.getElementById(button).style.background = "none"
    document.getElementById(button).style.color = "white"
}


}


Fsection2chekcfunk(e, whatbut, whattekst) {
    let previewtekst
    let sortrue = false;
    if (whatbut == "gobut") {
    previewtekst = "Genre: ";
    } else {
    previewtekst = "Sort by: ";
    sortrue = true;
    }
    let thebutt = document.getElementsByClassName(whatbut)
    let counter = 0;
    if (e != null) {
        if (!e.target.classList.contains("active")) {
            for (let i=0; i<thebutt.length; i++) {
                if (thebutt[i].classList.contains("active")) {
                    thebutt[i].classList.remove("active"); 
                }
            }
            e.target.classList.add("active")
        }
    }
    // if (counter == 0) {
    //     previewtekst += ""+thebutt[i].getAttribute("data-value")+"";
    // } else {
    //     previewtekst += ", "+thebutt[i].getAttribute("data-value")+"";

        for (let i=0; i<thebutt.length; i++) {
            if (thebutt[i].classList.contains("active")) {
                thebutt[i].children[1].children[0].children[1].style.display = "initial"
                if (counter == 0) {
                    previewtekst += ""+thebutt[i].children[0].innerHTML+"";
                } else {
                    previewtekst += ", "+thebutt[i].children[0].innerHTML+"";
                }
                counter++;
            } else {
                thebutt[i].children[1].children[0].children[1].style.display = "none"
            }

        }

        document.getElementById(whattekst).innerHTML = previewtekst; 
   
}


fdchange(val) {
    if (this.allownext) {
        let self = this;
        self.allownext = false;
        let activeoption = document.getElementById("Dmoviea")
        let nextoption = document.getElementById("DmovieaNext")

        nextoption.children[1].children[0].innerHTML = "";
        nextoption.children[1].children[3].innerHTML = "";
        nextoption.children[0].style.background = "";
        nextoption.children[1].children[1].innerHTML = "";
        nextoption.children[1].children[4].children[0].style.clipPath = "";
        nextoption.children[1].children[1].innerHTML = "";


        Promise.resolve(getMovie.DiscoverMovies()).then(function(value) {
            if (val == "next") {
                if (self.FDpos+1 < value.length) {
                    self.FDpos++;
                } else {
                    self.FDpos = 0;
                }
            } else {
                if (self.FDpos > 0) {
                    self.FDpos--;
                } else {
                    self.FDpos = value.length-1;
                }
            }
            nextoption.children[1].children[0].innerHTML = value[self.FDpos].title;
            nextoption.children[1].children[3].innerHTML = value[self.FDpos].overview;
            nextoption.children[0].style.background = "url("+value[self.FDpos].image+")";
            nextoption.children[1].children[1].innerHTML = value[self.FDpos].release_date.slice(0,4);
            let convertedRating = 100-(value[self.FDpos].vote_average*10);
            nextoption.children[1].children[4].children[0].style.clipPath = "inset(0px "+convertedRating+"% 0px 0%)";
            nextoption.children[1].children[1].innerHTML += value[self.FDpos].genre;
        
            // document.getElementById("fsection1").style.opacity = 1;
        })
        if (val == "next") {
            nextoption.style.transform = "translateX(100%)"
        } else {
            nextoption.style.transform = "translateX(-100%)"
        }
        activeoption.style.transform = "translate(0%)"
        nextoption.style.opacity = 0
        activeoption.style.opacity = 1
        setTimeout(function(){ 
            nextoption.style.transition = "0.5s"
            activeoption.style.transition = "0.5s"
            nextoption.style.opacity = 1
            activeoption.style.opacity = 0
            nextoption.style.transform = "translate(0%)"
            if (val == "next") {
                activeoption.style.transform = "translateX(-100%)"
            } else {
                activeoption.style.transform = "translateX(100%)"
            }
            setTimeout(function(){ 
                nextoption.style.transition = "0s"
                activeoption.style.transition = "0s"
                activeoption.id = "DmovieaNext"
                nextoption.id = "Dmoviea"
                self.allownext = true;
            }, 550);
    }, 50);

    }
}

}
