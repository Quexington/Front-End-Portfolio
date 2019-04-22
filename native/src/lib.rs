#[macro_use]
extern crate neon;
#[macro_use(bson, doc)]
extern crate bson;
extern crate mongodb;

use bson::Bson;
use mongodb::{Client, ThreadedClient};
use mongodb::db::ThreadedDatabase;
use neon::prelude::*;

pub fn click(mut cx: FunctionContext) -> JsResult<JsString> {
    let client = Client::connect("localhost", 27017).unwrap();
    let db = client.db("admin");
    let collection = db.collection("click");

    let mut cursor = collection.find(Some(doc!{"index" => "main_clicker"}), None).unwrap();
    let item = cursor.next();

    match item {
        Some(Ok(doc)) => match doc.get("click") {
            Some(&Bson::I32(ref clicks)) => {
                let clicks = clicks + 1;
                collection.update_one(doc!{"index" => "main_clicker"}, doc!{"$set": {"click" => clicks}}, None).unwrap();
            },
            _ => panic!("Click wasn't there")
        },
        Some(Err(_)) => panic!("Cursor didn't next"),
        None => panic!("The doc is gone")
    }

    Ok(cx.string(""))
}

pub fn get_clicks(mut cx: FunctionContext) -> JsResult<JsString> {
    let client = Client::connect("localhost", 27017).unwrap();
    let db = client.db("admin");
    let collection = db.collection("click");

    let mut cursor = collection.find(Some(doc!{"index" => "main_clicker"}), None).unwrap();
    let item = cursor.next();

    match item {
        Some(Ok(doc)) => match doc.get("click") {
            Some(&Bson::I32(ref clicks)) => {
                let clicks = clicks.clone().to_string();
                return Ok(cx.string(clicks));
            },
            _ => panic!("Click wasn't there")
        },
        Some(Err(_)) => panic!("Cursor didn't next"),
        None => panic!("The doc is gone")
    }
}

pub fn click_tester() {
    let client = Client::connect("localhost", 27017).unwrap();
    let db = client.db("admin");
    let collection = db.collection("click");

    let mut cursor = collection.find(Some(doc!{"index" => "main_clicker"}), None).unwrap();
    let item = cursor.next();

    match item {
        Some(Ok(doc)) => match doc.get("click") {
            Some(&Bson::I32(ref clicks)) => {
                let clicks = clicks + 1;
                collection.update_one(doc!{"index" => "main_clicker"}, doc!{"$set": {"click" => clicks}}, None).unwrap();
            },
            _ => panic!("Click wasn't there")
        },
        Some(Err(_)) => panic!("Cursor didn't next"),
        None => panic!("The doc is gone")
    }
}

register_module!(mut cx, {
    cx.export_function("click", click).unwrap();
    cx.export_function("get_clicks", get_clicks)
});

#[cfg(test)]
mod tests {
    use click_tester;

    #[test]
    fn click_test() {
        click_tester();
    }
}
