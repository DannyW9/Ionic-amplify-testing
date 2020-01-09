import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { APIService } from '../API.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  public cards;
  public cardIndex = 1;
  public slideOptions = {
    slidesPerView: 1.2,
    spaceBetween: -5,
    centeredSlides: true,
    pagination: {
      el: ".swiper.pagination",
      type: "fraction"
    }
  };

  constructor(
    public modalController: ModalController,
    public apiService: APIService,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    // this.apiService.ListCards().then(query => this.cards = query.items);
    this.apiService.SearchCards({question: {match: this.navParams.get('filter')}}).then(query => {
      this.cards = query.items;
    })
  }

  showAnswer(card) {
    card.displayAnswer = true;
  }

  async stop() {
    await this.modalController.dismiss();
  }

}
