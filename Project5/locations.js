      //Item prototype.
      function makeItem(_id, _name, _desc) {
        this.id       = _id;
        this.name     = _name;
        this.desc     = _desc;
        this.toString = function() {
          var retVal = "";
          retVal = "[makeItem]" + "\n" +
                   "id:"   + this.id   +"\n" +
                   "name:" + this.name +"\n" +
                   "desc:" + this.desc +"\n";
          return retVal;
        }
      }
      
      //Item prototype global array.
      var items = new Array();
        
      //Location prototype.
      function locale(_id, _name, _desc, _item) {
        this.id       = _id;
        this.name     = _name;
        this.desc     = _desc;
        this.item     = _item;
        this.toString = function() {
          var retVal = "";
          retVal = "[locale]" + "\n" +
                   "id:"   + this.id   +"\n" +
                   "name:" + this.name +"\n" +
                   "desc:" + this.desc +"\n" +
                   "item:" + this.item +"\n";
          return retVal;
        }
      }  
       
      //Location prototype global array.
      var locales =  new Array();
        
      function _beach() {
          updateDisplay(locales[0].desc);
          score = score + 10;
          document.getElementById("score").innerHTML = score;
      }
            
      function _natives() {
           updateDisplay(locales[1].desc);
           score = score + 10;
           document.getElementById("score").innerHTML = score;
      }
            
      function _volcano() {
            updateDisplay(locales[2].desc);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
      }
            
      function _pool() {
            updateDisplay(locales[3].desc);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
      }
          
      function _jungle() {
            updateDisplay(locales[4].desc);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
          if (!playerHasRope) {
            updateText(items[2].desc);
          }
      }
       
      function _cave() {
            updateDisplay(locales[5].desc);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
      }
            
      function _ruins() {
            updateDisplay(locales[6].desc);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
          if (playerHasRope) {
            alert("You use the rope to climb to the top of the ruins. A passing helicopter spots you and carries you to safety.");
          }
      }
          
      function _quicksand() {
            updateDisplay(locales[7].desc);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
      }
          
      function _rocks() {
            updateDisplay(locales[8].desc);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
      }
      
      function _spikes() {
            alert(locales[9].desc)+ "\n";
            score = score + 10;
            document.getElementById("score").innerHTML = score;
      } 