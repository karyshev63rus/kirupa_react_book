import React, { Component } from 'react'
import MenuButton from './MenuButton'
import Menu from './Menu'

class MenuContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            visible: false
        }
        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    handleMouseDown (e) {
        this.toggleMenu()
        console.log('clicked')
        e.stopPropagation()
    }

    toggleMenu () {
        this.setState({
            visible: !this.state.visible
        })
    }

    render () {
        console.log('Rendering: MenuContainer')
        return (
            <div>
            <MenuButton handleMouseDown={this.handleMouseDown} />
            <Menu handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible} />
                <div>
                    <p>Найдешь пункт, который здесь лишний?</p>
                    <ul>
                    <li>Alpha</li>
                    <li>Bravo</li>
                    <li>Charlie</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MenuContainer