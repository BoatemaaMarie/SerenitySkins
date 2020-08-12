# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Service.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')


@reflexology_massage = Service.create!(name: "Reflexology Massage", duration: "60 min", price: "$40", description: "Reflexology is a type of massage that involves applying different amounts of pressure to the feet. It's based on a theory that these body parts are connected to certain organs and body systems. Reflexologists believe that applying pressure to these parts offers a range of health benefits.", img_url: "http://res.cloudinary.com/dc6ncx5wp/image/upload/v1597238721/reflexology_e6x30v.jpg" )

@mesotherapy = Service.create!(name: "Mesotherapy", duration: "70 min", price: "$150", description: "esotherapy is a technique that uses injections of vitamins, enzymes, hormones, and plant extracts to rejuvenate and tighten skin, as well as remove excess fat. After the injections, we do a series of fat-reduction massages. Mesotherapy is considered a nonsurgical alternative to liposuction for removing unwanted fat. You can lose up to 15 pounds after just 2 sessions!", img_url: "http://res.cloudinary.com/dc6ncx5wp/image/upload/v1597238721/reflexology_e6x30v.jpg")

@kybella = Service.create!(name: "Kybella", duration: "30 min", price: "$400", description: "An injectable treatment that melts fat rapidly and can dramatically improve the contour of the jawline. (price listed above is for 1 vial and 1 sealer injection- 15days apart) 2 sessions are recommended, 4 weeks apart; to see fast results.", img_url: "http://res.cloudinary.com/dc6ncx5wp/image/upload/v1597241359/neck_lift_jtdcrq.jpg")  

@cryolipolysis = Service.create!(name: "Cryolipolysis", duration: "45 min", price: "$175", description: "Cryolipolysis (fat freezing) is a suction applied to a target area and the skin’s temperature is lowered to -16 degrees Celsius. Inducing fat cells to dissolve. The dead fat cells are removed through the body’s natural processes in a period of 4-6 weeks.", img_url: "http://res.cloudinary.com/dc6ncx5wp/image/upload/v1597242300/cryolipolysis_bkxo9o.jpg")

