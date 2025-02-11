---
sidebar_position: 4
title: Add articles and media
---
The Huma Studio CMS is a powerful content management system designed to simplify the creation of articles, videos, and other assets. This user-friendly platform enables you to add, edit, and organise content within your app, ensuring it reaches the right users at the right time. Follow the steps below to add a new article to your app:

1. Select the app that you want to add content to.
2. Access the CMS by clicking the collection icon.
3. Click <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>Create</span> to add another article.
4. Skip the <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>Content ID</span> field. This field will be auto-populated once you save your new article. 
5. Add the <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>Title</span>, upload the <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>Feature image</span> that will appear in the app, and select the <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>Article type</span>. 
6. In the <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>Body</span> section, add the main content of your article. You can use formatting tools to style your text, add headings, lists, quotes, and links. 
7. Add <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>Tags</span> which will help you find articles more easily once you decide where to place your content in your app.
8. Click <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>Save changes</span> to save your edits.

![alt text](<../assets/Creating content-0.png>)

<div style={{ backgroundColor: 'transparent', border: '1px solid #297A7A', borderBottomWidth: '1px', borderRightWidth: '1px', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
  <strong>Tip: Adding external URLs or media as an article type</strong><br/>
  <span>If your article type is an external URL, add your external resource by entering the URL in the <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>External URL</span> field. If your article type is a media asset, such as an image or video, add your asset by clicking the <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>Media</span> button under the Body section.</span>
</div>

<br/>

![alt text](<../assets/Creating content-p1.png>)

![alt text](<../assets/Creating content- p2.png>)
### Add assets

Assets like images and videos can be uploaded to visually enhance your articles and make them more engaging for your users. You can either use existing assets from the Huma library or upload your own. To access the assets, select the image icon in the left side panel. You can upload images in JPG or PNG format (up to 2MB each) and videos in MP4 or MOV format (up to 100MB each). Once uploaded, these assets will be available in your CMS editor for immediate use.


![alt text](<../assets/Upload media-0.png>)

![alt text](<../assets/Upload media-1.png>)

![alt text](<../assets/Upload media-2.png>)

### How to use HI to generate images for your articles

Enhance your articles with engaging visuals using the HI feature. Here’s how you can easily create and integrate images into your content:

1. After writing your article or content, click on the<span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}> HI </span> icon at the top of the navigation bar.
2. You have two options:
    * Copy and paste your full article into the prompt.
    * Simply write a title or key details about your article and ask HI to generate an image.
3. Once the image is generated, review it. If you're happy with the result, click on the image asset. It will be automatically saved into the<span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}> My Assets</span> section.
4. When you're ready to include the image, click on<span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>Media</span> in your article editor. You'll find the image in My Assets, ready to be added to your content.

![alt text](<../assets/Upload media-3.png>)

![alt text](<../assets/Upload media-4.png>)
### Adding content to your app
 
Once you have created a few content pieces, you can start adding those to the desired pages of your app. 

1. Go to the <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>Builder</span> page. Select the page of your app that you want to add content to. 
2. Click <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>+ New widget</span> in the left side panel, then scroll down and select <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>Feature articles</span>.
3. Choose which articles will be shown under the dropdown button <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>All articles</span>.

![alt text](<../assets/Feature articles-0.png>)


### Content sources

- <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>All articles</span> will show all content pieces available in the CMS.

![alt text](<../assets/Feature articles-1.png>)
- <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>Filter by tags</span> allows you to add content with specific tags.
- <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>Manual list</span> allows you to search and add available content in the CMS. 

![alt text](<../assets/Feature articles-2.png>)

![alt text](<../assets/Feature articles-3.png>)

![alt text](<../assets/Feature articles-4.png>)

- <span style={{ backgroundColor: '#EBEBEB', padding: '0 5px', borderRadius: '5px' }}>Advanced query</span> allows you to apply advanced logic to which content pieces will be shown.
  
### Advanced Query

In Advanced query, there are some key variables, primitives, functions, and basic conditional logic you can use to create your query.
* **Key Variables**
  - `EMPTY`: Represents an empty list. Use this when you don't want to return any articles. For example, `unread(articles) if user.age >= 18 else EMPTY` will return a list of unread articles if the user is an adult, and no articles if they are not.
  - `NOW`: Refers to the current date and time.
  - `TODAY`: Refers to the current date.
  - `articles` : Represents all available articles. This is typically used as the first parameter in most functions, such as `unread(articles)`, `limit(articles, 5)`, or `filter(articles, tag="HR")`.

* **Primitives**
  - `data.<primitive>`: Serves as a placeholder for any last recorded basic metric, such as HeartRate, Weight, or BMI. This can include multiple nested fields like:
  - `data.<primitive>.flags`: A flags object that includes `flags.gray`, `flags.amber`, and `flags.red`. These attributes represent the severity levels calculated for the metric.
  - `data.<primitive>.value`: The value recorded by the user, typically a number or a decimal, depending on the metric.
  - More complex primitives:
    - `data.BloodPressure.systolicValue`
    - `data.BloodPressure.diastolicValue`
    - `data.CVDRiskScore.roundedValue`

* **Functions** 
  - `limit(articles: array, count: int)`: Limits the number of articles to the specified count.
Example: 
`limit(unread(articles), 2)` will show a maximum of 2 unread articles.
  - `unread(articles: array)`: Filters articles to show only those that are unread.
    
    Example: 

        unread(articles)
        
    It will display all unread articles.
    

* **Conditions**

  Our DSL follows Python syntax, enabling the creation of complex conditional logic.
  -  `if/else`:

      Example: 
    
         <if true result> if data.HeartRate.flags else <else result>
    
      Usage: 
      ```
      filter(articles, tag="HR") if data.HeartRate.flags.red > 0 else limit(unread(articles), 2)
      ```
      This condition displays articles tagged with "HR" if the last HeartRate record is in the red severity level. Otherwise, it shows 2 unread articles.

  - `and/or`:
    
    Example: 
              
        unread(articles) if data.HeartRate.flags.amber or data.HeartRate.flags.red else random(articles, 2)
    This condition returns all unread articles if the last HeartRate record is within amber or red severity levels. Otherwise, it shows 2 random articles.

  - `+` (add operation):
    
    Example: 
              
        filter(articles, tag="HR") + filter(articles, tag="sport")
    This will display all articles tagged with either "HR" or "sport."

This guide should provide a clear understanding of how to leverage the "Featured Article" feature using DSL Queries. Use these tools to tailor the content you see to match your specific needs and interests.

