<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          EPIC APP
        </q-toolbar-title>

        <div>EPIC APP</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Youtube',
          caption: 'my channel',
          icon: 'movie_creation',
          link: 'https://www.youtube.com/channel/UCGKx5-MAVUkUTxP-edRyKkw?view_as=subscriber'
        },
        {
          title: 'Instagram',
          caption: 'my insta',
          icon: 'photo_camera',
          link: 'https://www.instagram.com/fortnite_probz/'
        },
        {
          title: 'Youtube 2',
          caption: 'my other channel',
          icon: 'movie_creation',
          link: 'https://www.youtube.com/channel/UCGZJiMgSsVdyZ2VH4mQvu5A'
        },
        {
          title: 'Facebook',
          caption: 'my facebook',
          icon: 'face',
          link: 'https://www.facebook.com/lanang.soekon.3/'
        },
        {
          title: 'Twitter',
          caption: 'my twitter',
          icon: 'rss_feed',
          link: 'https://twitter.com/Probz20'
        
      
        }
      ]
    }
  }
}
</script>
