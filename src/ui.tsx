import { h, Fragment } from 'preact'
import { render, Container, Text, Button, VerticalSpace } from '@create-figma-plugin/ui'
import { emit, once } from '@create-figma-plugin/utilities';


function Plugin() {

  function handleScaleText() {
    emit('SCALE_TEXT');
  }

  function handleChangeLanguage() {
    emit('CHANGE_LANGUAGE');
  }

 return (
  <Container space='small'>
    <VerticalSpace space='medium' />
    <Button onClick={handleScaleText}>Scale Text Frames</Button>
    <VerticalSpace space='medium' />
    <Button onClick={handleChangeLanguage}>Chage Language</Button>
    <VerticalSpace space='medium' />
  </Container>
  )
}

export default render(Plugin)