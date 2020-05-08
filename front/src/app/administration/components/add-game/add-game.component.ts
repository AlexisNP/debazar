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
  }

  submitForm() {

  }

  changeRating(e) {
    this.gameForm.get('game_rating').setValue(e.target.value.substr(3), {
      onlySelf: true
    })
  }
  
  changeEditor(e) {
    this.gameForm.get('game_editor').setValue(e.target.value, {
      onlySelf: true
    })
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
