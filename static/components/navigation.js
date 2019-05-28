export default {
  template: `
    <v-navigation-drawer
        permanent
        app
        floating
    >
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Application
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.url"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  `,
  data() {
    return {
      items: [
        {title: 'Home', icon: 'dashboard', url: '/'},
        {title: 'About', icon: 'question_answer', url: '/about'},
        {title: 'Settings', icon: 'settings', url: '/settings'},
        {title: 'Groups', icon: 'group', url: '/groups'}
      ],
      right: null
    }
  }
}
