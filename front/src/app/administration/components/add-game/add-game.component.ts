import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/global/services/category.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import Category from 'src/app/global/models/Category';
import Editor from 'src/app/global/models/Editor';
import { EditorService } from 'src/app/global/services/editor.service';
import { GameService } from 'src/app/global/services/game.service';
import Game from 'src/app/global/models/Game';
import Author from 'src/app/global/models/Author';
import { AuthorService } from 'src/app/global/services/author.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  listCategories: Category[];
  listEditors: Editor[];
  listGames: Game[];
  listAuthors: Author[];

  ratingList = [ 0, 1, 2, 3, 4, 5 ];

  gameForm = new FormGroup({
    game_name: new FormControl('', Validators.required),
    game_image: new FormControl(''),
    game_description: new FormControl('', Validators.required),
    game_author: new FormControl(''),
    game_author_new: new FormControl(''),
    game_editor: new FormControl(''),
    game_editor_new: new FormControl(''),
    game_players: new FormControl('', Validators.required),
    game_duration: new FormControl('', Validators.required),
    game_published: new FormControl(''),
    game_age: new FormControl('', Validators.required),
    game_price: new FormControl(''),
    game_rating: new FormControl('', Validators.required),
    game_category: new FormArray([], Validators.required),
    game_extension: new FormControl('')
  })

  expanded: Boolean = false;

  newAuthor: Author = new Author(99999, 'Nouvel Auteur');
  newEditor: Editor = new Editor(99999, 'Nouvel Editeur');

  constructor(private categoryServ: CategoryService, private editorServ: EditorService,
              private gameServ: GameService, private authorServ: AuthorService) {
  }

  public data = new FormGroup({
      name: new FormControl(),
      image: new FormControl(),
      description: new FormControl(),
      author: new FormArray([]),
      editor: new FormControl(),
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
    this.authorServ.getAllAuthors().subscribe(data => {
      // console.log("data:", data),
      this.listAuthors = data;
    }, error => {console.log("Error", error);
    });

    this.gameServ.getAllGames()
    .then(values => {
        this.listGames = Object.values(values);
    })
    .catch(err => {
        console.log(err)
    })

    
    // this.gameServ.getAllGames().subscribe(data => {
    //   // console.log("data:", data),
    //   this.listGames = data;
    // }, error => {console.log("Error", error);
    // });
    setTimeout(() => {
      this.listEditors.push(this.newEditor);
      this.listAuthors.push(this.newAuthor);
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

    this.data = new FormGroup({
      name: new FormControl(),
      image: new FormControl(),
      description: new FormControl(),
      author: new FormArray([]),
      editor: new FormControl(),
      players: new FormControl(),
      duration: new FormControl(),
      published: new FormControl(),
      age: new FormControl(),
      price: new FormControl(),
      rating: new FormControl(),
      category: new FormArray([]),
      extension: new FormControl()
    })
  }

  get f() {
    return this.gameForm.controls;
  }

  gameAuthors() {
    let authors: Author[] = this.gameForm.get('game_author').value;
    if (authors.includes(this.newAuthor)) {
      return true;
    } else {
      return false;
    }
  }

  gameEditors() {
    let editor: Editor = this.gameForm.get('game_editor').value;
    if (editor == this.newEditor) {
      return true;
    } else {
      return false;
    }
  }

  submitForm() {
    this.resetChk();

    // console.log(this.gameForm.value);

    this.isSubmitted = true;
    
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
    
    // console.log('passed');

    setTimeout(() => {
      this.data.get('name').setValue(this.gameForm.get('game_name').value);
      this.data.get('image').setValue(this.gameForm.get('game_image').value);
      this.data.get('description').setValue(this.gameForm.get('game_description').value);
      this.data.get('players').setValue(this.gameForm.get('game_players').value);
      this.data.get('duration').setValue(this.gameForm.get('game_duration').value);
      this.data.get('published').setValue(this.gameForm.get('game_published').value);
      this.data.get('age').setValue(this.gameForm.get('game_age').value);
      this.data.get('price').setValue(this.gameForm.get('game_price').value);
      this.data.get('rating').setValue(this.gameForm.get('game_rating').value);
      this.data.get('extension').setValue(this.gameForm.get('game_extension').value);

      // this.data.get('category').setValue(this.gameForm.get('game_category').value);
      for (let control of this.gameForm.get('game_category')['controls']) {
        const dataCategory = this.data.get('category') as FormArray;
        dataCategory.push(new FormControl(control.value));
      }

      let tempAuthor: Author[] = this.gameForm.get('game_author').value;
      tempAuthor.forEach(author => {
        if (author != this.newAuthor) {
          const dataAuthor = this.data.get('author') as FormArray;
          dataAuthor.push(new FormControl(author));
        }
      });

      if (this.gameAuthors()) { // IF there is new editors not already in the list
        let newAuthor: String = this.gameForm.get('game_author_new').value;
        if (newAuthor != '') {
          let newAuthorList: string[] = newAuthor.split(','); // split string to array
          for (let i = 0; i < newAuthorList.length; i++){ // trim each element of array
            newAuthorList[i] = newAuthorList[i].trim();
          }
          // check for each
          for (let i = 0; i < newAuthorList.length; i++){
            this.listAuthors.every(author => {
              if (newAuthorList[i] == author.name) {
                // add author to datas
                const dataAuthor = this.data.get('author') as FormArray;
                dataAuthor.push(new FormControl(author));
                return true; // let the every loop continue
              } else {
                let tempAuthor: Author;
                // add author to DB
                this.authorServ.addAuthor(newAuthorList[i]).subscribe(data => {
                  // console.log("addAuthor:", data),
                  tempAuthor = new Author(data.id, data.name);
                }, error => {console.log("Error", error);
                });
                setTimeout(() => {
                  // add author to datas
                  const dataAuthor = this.data.get('author') as FormArray;
                  dataAuthor.push(new FormControl(tempAuthor));
                  return false; // break the every loop
                }, 1000);
              }
            });            
          }
        }
      }

      if (this.gameEditors()) {
        let tempEditor: Editor;
        // add editor to DB
        this.editorServ.addEditor(this.gameForm.get('game_editor_new').value).subscribe(data => {
          // console.log("data:", data),
          tempEditor = new Editor(data.id, data.name);
        }, error => {console.log("Error", error);
        });
        setTimeout(() => {
          // add editor to datas        
          this.data.get('editor').setValue(tempEditor);
        }, 1000);
      } else {
        this.data.get('editor').setValue(this.gameForm.get('game_editor').value);
      }

      setTimeout(() => {
        console.log('before: ' , this.data.value);
        
        this.gameServ.addGame(this.data.value);
      }, 2000);
      
    }, 1000);
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
