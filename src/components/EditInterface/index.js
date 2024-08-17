import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  ContentContainer,
  Interface,
  InterfaceHeading,
  InterfaceLogo,
  InputSection,
  OptionsList,
  EachOption,
  Button,
  TextElement,
} from './styledComponent'

class EditInterface extends Component {
  state = {
    fontWeight: false,
    fontStyle: false,
    textDecoration: false,
  }

  onBold = () => {
    this.setState(prevState => ({fontWeight: !prevState.fontWeight}))
  }

  onItalic = () => {
    this.setState(prevState => ({fontStyle: !prevState.fontStyle}))
  }

  onUnderLine = () => {
    this.setState(prevState => ({textDecoration: !prevState.textDecoration}))
  }

  render() {
    const {fontWeight, fontStyle, textDecoration} = this.state
    return (
      <MainContainer>
        <ContentContainer>
          <Interface>
            <InterfaceHeading>Text Editor</InterfaceHeading>
            <InterfaceLogo
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </Interface>
          <InputSection>
            <OptionsList>
              <EachOption>
                <Button
                  data-testid="bold"
                  type="button"
                  color={fontWeight ? '#faff00' : '#f1f5f9'}
                  onClick={this.onBold}
                >
                  <VscBold size={25} />
                </Button>
              </EachOption>
              <EachOption>
                <Button
                  data-testid="italic"
                  type="button"
                  color={fontStyle ? '#faff00' : '#f1f5f9'}
                  onClick={this.onItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </EachOption>
              <EachOption>
                <Button
                  data-testid="underline"
                  type="button"
                  color={textDecoration ? '#faff00' : '#f1f5f9'}
                  onClick={this.onUnderLine}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </EachOption>
            </OptionsList>
            <TextElement
              cols="70"
              row="20"
              fontStyle={fontStyle ? 'italic' : 'normal'}
              textDecoration={textDecoration ? 'underline' : 'normal'}
              fontWeight={fontWeight ? 'bold' : 'normal'}
            />
          </InputSection>
        </ContentContainer>
      </MainContainer>
    )
  }
}

export default EditInterface
