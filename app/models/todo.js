//var moment = require('alloy/moment');
exports.definition = {
	config: {
		"columns": {
			"item":"text",
			"done":"integer",
			"date_completed" :"text",
			"user_id" :"text"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "todo",
			"idAttribute": "user_id"
		}
	},

	extendModel : function(Model) {
		_.extend(Model.prototype, {
			/*validate : function(attrs) {
				for (var key in attrs) {
					var value = attrs[key];
					if (value) {
						if (key === "item") {
							if (value.length <= 0) {
								return 'Error: No item!';
							}
						}
						if (key === "done") {
							if (value.length <= 0) {
								return 'Error: No completed flag!';
							}
						}
					}
				}
			}*/
		});

		return Model;
	},
extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
	//Insert Record
	  insertRecord : function(opts) {
       var collection = this;
       var dbName = collection.config.adapter.db_name;
       var table = collection.config.adapter.collection_name;
       var columns = collection.config.columns;
       var names = [], q = [];
       for (var k in opts.query.columns) {
            names.push(opts.query.columns[k]);
            q.push("?");
       }
       var sql = "INSERT INTO " + table + 
                 " (" + names.join(",") + ") VALUES 
                 (" +   q.join(",") + ");";

       db = Ti.Database.open(collection.config.adapter.db_name);
       db.execute(sql, opts.query.value);
       db.close();
       collection.trigger('sync');
            },
            
            
            ///Delete Record
       
       deleteRecord : function(opts) {
       var collection = this;
       var dbName = collection.config.adapter.db_name;
       var table = collection.config.adapter.collection_name;
       var columns = collection.config.columns;
       var names = [], q = [];
       for (var k in opts.query.columns) {
            names.push(opts.query.columns[k]);
            q.push("?");
       }
       var sql = "DELETE FROM " + table + " " + opts.query.sql;

       db = Ti.Database.open(collection.config.adapter.db_name);
       db.execute(sql, opts.query.params);
       db.close();
       collection.trigger('sync');
            },      
           
            
        //Delete All Record Function 
        
       deleteAllRecords : function() {
       var collection = this;
       var dbName = collection.config.adapter.db_name;
       var table = collection.config.adapter.collection_name;
       var sql = "DELETE FROM " + collection.config.adapter.collection_name;

       db = Ti.Database.open(collection.config.adapter.db_name);
       db.execute(sql);
       db.close();
       collection.trigger('sync');
           },
		
	
	
	guid: function(opts) {
				function s4() {
					return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  				}
				return (s4() + s4() + '-' + s4() + s4()).toUpperCase();
		},

//Update Record
       updateRecord : function(opts) {            
       var collection = this;
       var dbName = collection.config.adapter.db_name;
       var table = collection.config.adapter.collection_name;
       var columns = collection.config.columns;
       var names = [], whereQ = [], values=[];       
       
       for (var i in opts.query.columns) {
           names.push(opts.query.columns[i]+"=?");
       }
       for (var i in opts.query.whereKey) {
           whereQ.push(opts.query.whereKey[i]+"=?");
       }
                
        //Values of Set Columns and Where Condition
        for (var j in opts.query.values) {
            values.push(opts.query.values[j]);
        }
        for (var k in opts.query.whereValue) {
            values.push(opts.query.whereValue[k]);
        }
                
                var sql = "UPDATE " + table + " SET " + 
                 names.join(",") + " WHERE "+ whereQ.join(" AND ");

       db = Ti.Database.open(collection.config.adapter.db_name);
       db.execute(sql, values);
       db.close();
       collection.trigger('sync');
            },
	
	
	// For Backbone v1.1.2, uncomment this to override the fetch method
		/*	fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			},
		*/
	
	
	});
		return Collection;
}  
};