<template>
      <Content :style="{padding: '0 20px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="min-height: 200px;">
                        Content
                        <strong>{{$t("loadbundle", {lang: lang}) }}</strong>
                        <br/>
                         <Button type="primary" @click="lang1">汉语</Button>
                        <Button type="dashed" @click="lang2">英语</Button>
                    </div>
                </Card>
        </Content>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
      lang1(){
           this.$i18n.i18next.changeLanguage('zh');
      },
      lang2(){
          this.$i18n.i18next.changeLanguage('en');
      }

  },
  data() {
      return {
          lang:'ahahahahaha'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
