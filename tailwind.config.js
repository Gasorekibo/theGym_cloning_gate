/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    
    extend: {
      fontFamily:{
        lato:["Lato", "sans-serif"]
      },
      colors:{
        navbar:"#d5d5d5",
        headingColor:"#a18a4d",
        news:"#f2f2f2"
      },
      backgroundImage:{
        'hero': "url('/images/gate-profissionais_02.format-jpeg.jpg')",
        'scholar':"url('/images/Scholarship_homepage.jpg')",
        'vlatan': "url('/images/VRLatham.jpg')",
        'drawing': "url('/images/Untitled-1_0001_DSC07057.jpg')",
        'research':"url('/images/research-girl.jpg')",
        'daniel': "url('/images/Daniel-and-John-edit.jpg')",
        'corner':"url('/images/matt-connors-960.jpg')",
        'graduation':"url('/images/Class-of-2016_-Graduation-2016_10686-s.jpg')",
        'patron':"url('/images/Siddhesh-edit.jpg')",
        'museum':"url('https://www.gold.ac.uk/apps/events/image.php?id=14969')",
        'lgbtq':"url('https://www.gold.ac.uk/apps/events/image.php?id=14988')",
        'paint':"url('https://www.gold.ac.uk/apps/events/image.php?id=14991')",
        'jane':"url('/images/Jane-Dabate-edit.jpg')"
      },
      height: {
        "h-good": "678px"
      }
    },
  },
  plugins: [],
}

