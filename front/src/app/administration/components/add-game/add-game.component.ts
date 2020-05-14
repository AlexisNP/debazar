import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/global/services/category.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import Category from 'src/app/global/models/Category';
import Editor from 'src/app/global/models/Editor';
import { EditorService } from 'src/app/global/services/editor.service';
import { GameService } from 'src/app/global/services/game.service';
import Game from 'src/app/global/models/Game';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  listCategories: Category[];
  listEditors: Editor[];
  listGames: Game[];

  ratingList = [ 0, 1, 2, 3, 4, 5 ];

  gameForm = new FormGroup({
    game_name: new FormControl('', Validators.required),
    game_image: new FormControl(''),
    game_description: new FormControl('', Validators.required),
    game_editor: new FormControl('', Validators.required),
    game_players: new FormControl('', Validators.required),
    game_duration: new FormControl('', Validators.required),
    game_published: new FormControl('', Validators.required),
    game_age: new FormControl('', Validators.required),
    game_price: new FormControl(''),
    game_rating: new FormControl('', Validators.required),
    game_category: new FormArray([], Validators.required),
    game_extension: new FormControl('')
  })

  expanded: Boolean = false;

  constructor(private categoryServ: CategoryService, private editorServ: EditorService,
              private gameServ: GameService) {
  }

  public data = new FormGroup({
      name: new FormControl(),
      image: new FormControl(),
      description: new FormControl(),
      editor: new FormArray([]),
      players: new FormControl(),
      duration: new FormControl(),
      published: new FormControl(),
      age: new FormControl(),
      price: new FormControl(),
      rating: new FormControl(),
      category: new FormArray([]),
      extension: new FormControl()
  })

  ngOnInit() {
    this.categoryServ.getAllCategories().subscribe(data => {
      // console.log("data:", data),
      this.listCategories = data;
    }, error => {console.log("Error", error);
    });
    this.editorServ.getAllEditors().subscribe(data => {
      // console.log("data:", data),
      this.listEditors = data;
    }, error => {console.log("Error", error);
    });
    this.gameServ.getAllGames().subscribe(data => {
      // console.log("data:", data),
      this.listGames = data;
    }, error => {console.log("Error", error);
    });
    setTimeout(() => {
      this.listEditors.push(new Editor(99999, 'Nouvel Editeur'));
    }, 1000);
  }

  
  private chkName: Boolean = false;
  private chkImg: Boolean = false;
  private chkDescr: Boolean = false;
  private chkEditor: Boolean = false;
  private chkPlayers: Boolean = false;
  private chkDuration: Boolean = false;
  private chkPublication: Boolean = false;
  private chkAge: Boolean = false;
  private chkPrice: Boolean = false;
  private chkRating: Boolean = false;
  private chkCategories: Boolean = false;
  private isSubmitted: Boolean = false;

  resetChk() {
    this.chkName = false;
    this.chkImg = false;
    this.chkDescr = false;
    this.chkEditor = false;
    this.chkPlayers = false;
    this.chkDuration = false;
    this.chkPublication = false;
    this.chkAge = false;
    this.chkPrice = false;
    this.chkRating = false;
    this.chkCategories = false;
    this.isSubmitted = false;
  }

  get f() {
    return this.gameForm.controls;
  }

  submitForm() {
    this.resetChk();

    this.isSubmitted = true;

    console.log(this.gameForm.value);
    
    if (this.gameForm.get('game_name').value.trim() == '') {
      this.chkName = true;
      console.log("pranked 1");
      return;
    }
    if (this.gameForm.get('game_description').value.trim() == '') {
      this.chkDescr = true;
      console.log("pranked 2");
      return;
    }
    if (this.gameForm.get('game_players').value.trim() == '') {
      this.chkPlayers = true;
      console.log("pranked 3");
      return;
    }
    if (this.gameForm.get('game_duration').value.trim() == '') {
      this.chkDuration = true
      console.log("pranked 4");
      return;
    }
    if (this.gameForm.get('game_age').value.trim() == '') {
      this.chkAge = true
      console.log("pranked 5");
      return;
    }
  }

  /**
   * Ajouter une catégorie dans la liste ou la retire en fonction de l'état de la checkbox
   * @param category
   * @param isChecked
   */
  onChangeCat(category: Category, isChecked: boolean) {
    const categories = this.gameForm.get('game_category') as FormArray;
    if (isChecked) {
      categories.push(new FormControl(category));
    } else {
      const index = categories.controls.findIndex(x => x.value === category);
      categories.removeAt(index);
    }
  }
}
