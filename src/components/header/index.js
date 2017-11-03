import React, {Component} from 'react'
import SodiLogo from '../../assets/icons/logo-sodi-v-2@3x.png'
import GitHubLogo from '../../assets/icons/github-icon-1.svg'
import SlackLogo from '../../assets/icons/Slack_Mark_Monochrome_White.svg'
import MenuIcon from '../../assets/icons/menu.svg'
import CloseIcon from '../../assets/icons/error.svg'
import TwitterLogo from '../../assets/icons/twitter.svg'
import SScroll from '../../containers/about/SScroll'
import * as e from './elements'
import {Link} from 'react-router-dom'
import {GITHUB_LINK, SLACK_LINK, TW_LINK} from '../../actions/constants'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false
        }
        this.scrollMan = new SScroll({})
        this.toggleMenu = this
            .toggleMenu
            .bind(this)

        this.goToCustom = this
            .goToCustom
            .bind(this)

    }

    toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    goToCustom(id) {
        this.props.goTo
            ? this
                .props
                .goTo(id)
            : this
                .scrollMan
                .scrollTo(id)
        this.toggleMenu()
    }
    render() {
        // console.log('Header props: ',this.props)
        return (
            <e.Container openVisible={this.props.isOpenVisible} show={this.props.showNav}>
                <section>
                    <e.Logo>
                        <Link to='/' replace>
                            <h1><img src={SodiLogo} alt='Logo'/>SODI</h1>
                        </Link>
                    </e.Logo>

                    <e.Nav show={this.state.showMenu}>
                        <button onClick={this.toggleMenu}>
                            <img
                                src={this.state.showMenu
                                ? CloseIcon
                                : MenuIcon}
                                alt='menu'/>
                        </button>
                        <div>
                            <a
                                onClick={() => {
                                this.goToCustom('about')
                            }}>
                                <h1>About</h1>
                            </a>
                            <a onClick={() => this.goToCustom('openData')}>
                                <h1>Open access</h1>
                            </a>
                            <a onClick={() => this.goToCustom('faq')}>
                                <h1>FAQ</h1>
                            </a>
                            <Link to='/donations'>
                                <h1>Donate</h1>
                            </Link>
                        </div>
                    </e.Nav>
                    <e.SocialMedia show={this.props.showNav} top>
                        <a rel="noopener" href={SLACK_LINK} target='_blank'>
                            <img src={SlackLogo} alt='Slack'/>
                        </a>
                        <a rel="noopener" href={GITHUB_LINK} target='_blank'>
                            <img src={GitHubLogo} alt='Github'/>
                        </a>
                    </e.SocialMedia>

                    {/* <e.Arrow
                    onClick={this.props.toggleNav}
                    color={this.props.isOpenVisible?'21436c':'fff'}
                    show={this.props.showNav} angle={45}><i/></e.Arrow> */}

                </section>
                <e.SocialMedia show={this.props.showNav}>
                    <a rel="noopener" href={TW_LINK} target='_blank'>
                        <img src={TwitterLogo} alt='Twitter'/>
                    </a>
                    {/* <a rel="noopener" href={FB_LINK} target='_blank'>
                        <img src={FacebookLogo} alt='Facebook'/>
                    </a> */}
                </e.SocialMedia>
            </e.Container>
        )
    }
}

export default Header