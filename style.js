
/*
function getUp(callback){
    setTimeout(()=>{
        console.log("В 06:00 дзвонить будільник...")
    },1000)
    setTimeout(()=>{
        console.log("Ну і ще трошки дзвонить...)))")
    },2000)  
    setTimeout(()=>{
        callback("06:20")
    },3000)
}

function shower(time,cb){
 setTimeout(()=>{
    if(time > "06:30"){
        cb("нічого не встигаю...",null)
    }else{
        cb(null," душ..)")
    }
 }, 1500)
}
 
function eat(action,cb){
    setTimeout(()=>{
        if(!action){
            cb("Сьогодні час так швидко летить ," , null)
        }else{
            cb(null, "Сьогодні на сніданок ...")
        } 
    }, 2000)
}

function goToWork(data,cb){
    setTimeout(()=>{
        if(!data){
            cb("Буду добиратись на роботу на", null)
        }else{
            cb(null, "Їду на маршрутці , по часу все ...")
        }
    }, 2000)
    
}
function mask(mask,cb){
    setTimeout(()=>{
        if(!mask){
            cb("Забула маску, треба вертатись знову додому(((",null)
        }else{
            cb(null, "Фухххх....маску...")
        }
    }, 1500)
}

function wasLateToWork(err, cb){
    setTimeout(()=>{
        if(err){
            cb("Все сьогодні я точно спізнюсь на", null)
        }else{
            cb(null,"Сьогодні на роботу не ")
        }
    }, 1500)
}

function roadTrafficJam(traffic,cb){
    setTimeout(()=>{
        if(traffic){
            cb("О Божеее....пробка на дорозі",null)
        }else{
            cb(null,"Добре що пробок на дорозі нема ")
        }
    }, 1500)
}
function iAmOnWork(err,cb){
    setTimeout(()=>{
        if(err){
            cb("На робочий мітінг я по ходу вже спізнилась (((",null)
        }else{
            cb(null,"DONE, на роботу встигла))")
        }
    }, 1500)
   
}

function additionalWork(data,cb){
    setTimeout(()=>{
        if(!data){
            cb("Через спізнення на мітінг маю додатково сама",null)
        }else{
            cb(null, "Добре що встигла на мітінг ,")
        }
    }, 1500)
}

function work(data,cb){
    setTimeout(()=>{
        if(!data){
            cb("Буду працювати на годину довше через те спізнення (((",null)
        }else{
            cb(null, "Попрацюю до 13:00 і на обід ))")
        }
    },1500)
}

function dinner(data,cb){
    setTimeout(()=>{
        if(!data){
            cb("На обідню перерву сьогодні всього пів години ((", null)
        }else{
            cb(null, "Добре,що зранку встигла на роботу )))")
        }
    },1500)
}
  
function workingЕrip(workTask,cb){
    setTimeout(()=>{
        if(!workTask){
            cb("Сьогодні працюю в офісі ,",null)
        }else{
            cb(null, "Їдемо в робочу поїздку")
        }
    }, 1500)
   
}


function goHome(err,cb){
    if(err){
        cb("Тому додому приїду вчасно ,без затримок", null)
    }else{
        cb(null,"Додому я по ходу приїду пізно,затримаюсь з робочою поїздкою ((")
    }
}
function doMyHomeWork(err,cb){
    if(err){
        cb("Приїду додому в 18:00,буду робити  таски з OWU ", null)
    }else{
        cb(null, "Так як вдома буду не раніше 20:00, таски з OWU БУДУ РОБИТИ НАПЕВНО ДО 01:00 )))")
    }
}
function goSleep(data,cb){
    setTimeout(()=>{
        if(!data){
            cb("Лягла спати в 23:00",null)
        }else{
            cb(null, "Лягла спати в 02:00,")
        }
    }, 1500)
   
}



getUp((action)=>{
    console.log("Ну добре,добре вже встала...)) в ", action)
    shower("06:40",(err,action)=>{
        if(err){
            console.log("Завтра встану раніше", err)  
        }else{
            console.log("Йду скоренько в ",action)
        }
        eat(action,(err,data)=>{
            if(err){
                console.log(err,"поснідаю на роботі")
            }else{
                console.log(data,"вівсянка з фруктами,я її люблю)))")
            }
            goToWork(data,(e,d)=>{
                if(e){
                    console.log(e," таксі...(((");
                   
                }else{
                    console.log(d, "ok)))")
                }
                mask(false, (er,dat)=>{
                    if(er){
                        console.log(er,"...блін");
                    }else{
                        console.log(dat, "...не забула)))ураааааааааа))")
                    }
                    wasLateToWork(er, (err,data)=>{
                        if(er){
                            console.log(err,"роботу")
                        }else{
                            console.log(data,"не спізнюсь ))")
                        }
                        roadTrafficJam(true,(err,data)=>{
                            if(err){
                                console.log(err, "я тут по ходу застряла")
                            }else{
                                console.log(data, "по ходу все ок))")
                            }
                            iAmOnWork(err,(err,data)=>{
                                if(err){
                                    console.log(err)
                                }else{
                                    console.log(data)
                                }
                                additionalWork(data,(err,data)=>{
                                    if(err){
                                        console.log(err,"розібратись з документами")
                                    }else{
                                        console.log(data,"приступаю до основної роботи..))")
                                    }
                                    work(data,(err,data)=>{
                                        if(err){
                                            console.log(err)
                                        }else{
                                            console.log(data)
                                        }
                                        dinner(data,(err,data)=>{
                                            if(err){
                                                console.log(err,"через те спізнення ")
                                            }else{
                                                console.log(data ,"я молодчинка ,йду на обід))")
                                            }
                                            workingЕrip(true,(err,data)=>{
                                                if(err){
                                                    console.log(err,"немає робочих поїздок")
                                                }else{
                                                    console.log(data, "по мережі наших магазинів")
                                                }
                                                goHome(err,(err,data)=>{
                                                    if(err){
                                                        console.log(err)
                                                    }else{
                                                        console.log(data)
                                                    }
                                                    doMyHomeWork(err, (err,data)=>{
                                                        if(err){
                                                            console.log(err,"планую зробити їх до 22:00,бо швидко вернуcь з роботи")
                                                        }else{
                                                            console.log(data," знову ляжу спати пізно((")
                                                        }
                                                        goSleep(data,(err,data)=>{
                                                            if(err){
                                                                console.log(err, "добре що сьогодні швидко справилась...)))")
                                                            }else{
                                                                console.log(data,"хоч би завтра не проспати ((")
                                                            }
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
*/
//---------------------------------------------------Promise------------------------------------------------------------------------------//

/*
function getUp(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("В 06:00 дзвонить будільник...")
        },1000)
        setTimeout(()=>{
            console.log("Ну і ще трошки дзвонить...)))")
        },2000)  
        setTimeout(()=>{
            resolve("06:20")
        },3000) 
    })

}

function shower(time){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(time > "06:30"){
            reject("нічого не встигаю...")
        }else{
            resolve(" душ..)")
        }
    }, 1500)
  })
}
 
function eat(action){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(!action){
            reject("Сьогодні час так швидко летить ,")
        }else{
            resolve("Сьогодні на сніданок ...")
        } 
    }, 2000)
})
}

function goToWork(data){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(!data){
            reject("Буду добиратись на роботу на")
        }else{
            resolve("Сідаю в маршрутку , по часу все ...")
        }
    }, 2000)
 })  
}
function mask(mask){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(!mask){
            reject("Забула маску, треба вертатись знову додому(((")
        }else{
            resolve("Фухххх....маску...")
        }
    }, 1500)
 })
}


function wasLateToWork(data){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(data){
            resolve("Сьогодні на роботу ")
        }else{
          reject("Все сьогодні я точно спізнюсь на роботу")
        }
    }, 1500)
  })
}

function roadTrafficJam(traffic){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(traffic){
            reject("О Божеее....пробка на дорозі  я тут по ходу застряла")
        }else{
            resolve("Добре що пробок на дорозі нема ")
        }
    }, 1500)
  })
}
function iAmOnWork(data){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(data){
            resolve("DONE, на роботу встигла))")
            
        }else{
            reject("На робочий мітінг я по ходу вже спізнилась (((")
        }
    }, 1500)
  })
}

function additionalWork(data){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(!data){
            reject("Через спізнення на мітінг маю додатково сама")
        }else{
            resolve( "Добре що встигла на мітінг ,")
        }
    }, 1500)
 })  
}

function work(data){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(!data){
            reject("Буду працювати на годину довше через те спізнення (((")
        }else{
            resolve("Попрацюю до 13:00 і на обід ))")
        }
    },1500)
 })
}

function dinner(data){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(!data){
            reject("На обідню перерву сьогодні всього пів години ((")
        }else{
            resolve("Добре,що зранку встигла на роботу )))")
        }
    },1500)
  })
}

  
function workingЕrip(workTask){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(!workTask){
            reject("Сьогодні працюю в офісі ,")
        }else{
            resolve("Їдемо в робочу поїздку")
        }
    }, 1500)
  })
}


function goHome(err){
    return new Promise((resolve,reject)=>{
    if(err){
        reject("Тому додому приїду вчасно ,без затримок")
    }else{
        resolve("Додому я по ходу приїду пізно,затримаюсь з робочою поїздкою ((")
    }
  })
}
function doMyHomeWork(err){
    return new Promise((resolve,reject)=>{
    if(err){
        reject("Приїду додому в 18:00,буду робити  таски з OWU ")
    }else{
        resolve("Так як вдома буду не раніше 20:00, таски з OWU БУДУ РОБИТИ НАПЕВНО ДО 01:00 )))")
    }
    })
}
function goSleep(data){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(!data){
            reject("Лягла спати в 23:00")
        }else{
            resolve("Лягла спати в 02:00,")
        }
    }, 1500)
})  
}

getUp().then(action=>{
    console.log("Ну добре,добре вже встала...)) в ", action)
    return shower(action)
})
    .then(time =>{

        console.log(" Йду скоренько в ", time)
        return eat(time)
    })
    .then(action => {
        console.log(action,"вівсянка з фруктами,я її люблю)))" );
        return goToWork(action)
    })
    .then(data => {
        console.log(data,"ok)))" )
        return mask(true)
    })
    .then(data =>{
        console.log(data, "...не забула)))ураааааааааа))")
        return wasLateToWork(data)
    })
    .then(data =>{
       console.log(data,"не спізнюсь ))")
       return roadTrafficJam(false)
    })
    .then(data =>{
        console.log(data,"по ходу все ок))")
        return iAmOnWork(data)
    })
    .then(data =>{
        console.log(data)
        return additionalWork(data)
    })
    .then(data =>{
        console.log(data, "приступаю до основної роботи..))")
        return work(data)
    })
    .then(data => {
        console.log(data)
        return dinner(data)
    })
    .then(data => {
        console.log(data,"я молодчинка ,йду на обід))")
        return workingЕrip(true)
    })
    .then(data => {
        console.log(data,"по мережі наших магазинів")
       return  goHome(!data)
    })
    .then(data => {
        console.log(data)
        return doMyHomeWork(!data)
    })
    .then(data => {
        console.log(data)
        return goSleep(data)
    })
    .then(data => {
        console.log(data, "хоч би завтра не проспати ((")
    })
    .catch(reason =>{
        console.log(reason)
    })
*/