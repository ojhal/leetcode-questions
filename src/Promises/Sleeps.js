/**
 * @param {number} millis
 * @return {Promise}
 */
function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));
  }
  
  /** 
   * let t = Date.now()
   * sleep(100).then(() => console.log(Date.now() - t)) // 100
   */

  //Write a function delay that returns a promise. And that promise should return a setTimeout that calls resolve after 1000ms

const delay = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("hey there!")
        },1000)
    })
}

delay().then((result)=> console.log(result))