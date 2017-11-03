class SScroll{
    constructor(){
        this.delay=501      //ms
        this.duration=500   //ms
        this.lastClick=0
    }
    lastClick
    delay
    duration
    scrollTo=(destID)=>{
        /* To prevent "bounce" */
        /* https://stackoverflow.com/a/28610565/3405291 */
        if(this.lastClick>=(Date.now()-this.delay)){return}

        this.lastClick=Date.now()
        const dest=document.getElementById(destID)
        const to=dest.offsetTop
        if((document.body.scrollTop || document.documentElement.scrollTop || 0)===to){return}

        const diff=to-(document.body.scrollTop || document.documentElement.scrollTop || 0)
        const scrollStep=Math.PI / (this.duration/10)
        let count=0
        let currPos
        const start=window.pageYOffset
        const scrollInterval=setInterval(()=>{
            if((document.body.scrollTop || document.documentElement.scrollTop || 0)!==to){
                count++
                currPos=start+diff*(.5-.5*Math.cos(count*scrollStep))
                /* https://stackoverflow.com/q/28633221/3405291 */
                /* To support both Chromium-based and Firefox */
                document.body.scrollTop=currPos
                document.documentElement.scrollTop=currPos
            }else{clearInterval(scrollInterval)}
        },10)
    }
}

export default SScroll