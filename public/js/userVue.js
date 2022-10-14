Vue.component ('user', {
  props: ['user'],
  template: `
  <div @click="showCard()" class="users__card user">
    <h3 class="user__name">{{user.name}}</h3>
      <div class="user__contacts">
        <div class="user__tel">
          <img src="img/phone.png" alt="tel"/>
          <span>{{user.phone}}</span>
        </div>
        <div class="user__email">
          <img src="img/letter.png"/>
          <a href="mailto:in@oal.net">user.email</a>
        </div>
    </div>
  </div>  
  `,
  methods: {
    showCard() {
      this.$parent.showCard(this.user);
      this.$el.classList.add('linked')
    }
  }
})

Vue.component('pop-card', {
  props: ['user'],
  template:`
<div>
  <div class="modal-wrap"></div>
  <div class="pop-card">
    <div class="pop-card__hide-wrap">
      <div class="pop-card__hide" @click="hideCard()"><img src="img/x.png" alt="x" /></div>
    </div>
    <div class="pop-card__header">
      <h3>{{user.name}}</h3>
    </div>
    <div class="pop-card__main">
      <div class="pop-card__item">
        <div class="pop-card__item-name">Телефон:</div>
        <div class="pop-card__item-value">
        <a :href="'tel' + user.phone">{{user.phone}}</a>
        </div>
      </div>
      <div class="pop-card__item">
        <div class="pop-card__item-name">Почта:</div>
        <div class="pop-card__item-value">
        <a :href="'mailto:' + user.email">{{user.email}}</a>
        </div>
      </div>
      <div class="pop-card__item">
        <div class="pop-card__item-name">Дата приёма:</div>
        <div class="pop-card__item-value">{{user.hire_date}}</div>
      </div>
      <div class="pop-card__item">
        <div class="pop-card__item-name">Должность:</div>
        <div class="pop-card__item-value">{{user.position_name}}</div>
      </div>
      <div class="pop-card__item">
        <div class="pop-card__item-name">Подразделение:</div>
        <div class="pop-card__item-value">{{user.department}}</div>
      </div>
    </div>
    <div class="pop-card__footer">
      <h4 class="pop-card__footer-header">
        Дополнительная информация:
      </h4>
      <p class="pop-card__footer-content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Voluptatem perspiciatis quisquam rem aliquid, necessitatibus,
        nisi nam cupiditate repellat laboriosam, exercitationem saepe
        suscipit laudantium inventore qui! Incidunt at dolore asperiores
        quas: {{user.address}}
      </p>
    </div>
  </div>
</div>
  `,
  methods: {
    hideCard() {
      this.$parent.isCardShow = false
    }
  }
})