import React,{Component} from 'react'
import SodiLogo from '../../assets/icons/logo-sodi-v-2@3x.png'
import GitHubLogo from '../../assets/icons/github-icon-1.svg'
import SlackLogo from '../../assets/icons/Slack_Mark_Monochrome_White.svg'
import MenuIcon from '../../assets/icons/menu.svg'
import CloseIcon  from '../../assets/icons/error.svg'
import TwitterLogo from '../../assets/icons/twitter.svg'
// import FacebookLogo from '../../assets/icons/facebook-icon-white.svg'
import * as e from './elements'
import {Link} from 'react-router-dom'
import {GITHUB_LINK, SLACK_LINK, TW_LINK} from '../../actions/constants'
import SScroll from '../../containers/about/SScroll'
class Header extends Component{
    constructor(){
        super()
        this.state={
            showMenu:false
        }
        this.scrollMan = new SScroll({})
        this.toggleMenu = this.toggleMenu.bind(this)
        this.goTo = this.goTo.bind(this)
        
    }

    toggleMenu(){
        this.setState({showMenu:!this.state.showMenu})
    }
    goTo(id){
        this.props.history.push('/about')
        setTimeout(()=> {
            this.scrollMan.scrollTo(id)
        }, 300);

    }
    render(){     
         
        return (
            <div>
                <e.Logo>
                    <Link to='/' replace>
                        <h1><img src={SodiLogo} alt='Logo'/>SODI</h1>
                    </Link>
                </e.Logo>
                
                <e.Nav show={this.state.showMenu}>
                <button onClick={this.toggleMenu}>
                        <img src={this.state.showMenu?CloseIcon:MenuIcon} alt='menu'/>
                    </button>
                    <div>
                        <Link to='/about' replace>
                            <h1>About</h1>
                        </Link>
                        <a onClick={()=>this.goTo('openData')}>
                            <h1>Open access</h1>
                        </a>
                        <a onClick={()=>this.goTo('faq')}>
                            <h1>FAQ</h1>
                        </a>
                        <Link to='/donations'>
                            <h1>Donate</h1>
                        </Link>
                    </div>
                </e.Nav>
                <e.SocialMedia top>
                    <a rel="noopener" href={SLACK_LINK} target='_blank'>
                        <img src={SlackLogo} alt='Slack'/>
                    </a>
                    <a rel="noopener" href={GITHUB_LINK} target='_blank'>
                        <img src={GitHubLogo} alt='Github'/>
                    </a>
                </e.SocialMedia>
                <e.SocialMedia>
                    <a rel="noopener" href={TW_LINK} target='_blank'>
                        <img src={TwitterLogo} alt='Twitter'/>
                    </a>
                    {/* <a rel="noopener" href={FB_LINK} target='_blank'>
                        <img src={FacebookLogo} alt='Facebook'/>
                    </a> */}
                </e.SocialMedia>
            </div>
        )
    }
}

export default Header