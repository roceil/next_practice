import fs from 'fs'; // 讀取檔案用
import path from 'path'; // 提供路徑用
import matter from 'gray-matter'; // 解讀 md 語法用



const postsDirectory = path.join(process.cwd(), 'posts');
// process.cwd() => 抓取檔案的絕對路徑


// ! 連接資料用

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory); // 讀取到檔案後的值宣告給fileNames
  const allPostsData = fileNames.map((fileName) => { // fileNames 是陣列
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');  // filter出檔案名稱後宣告給 ID

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);  // 文章檔案的絕對路徑 
    const fileContents = fs.readFileSync(fullPath, 'utf8'); // 解析文章

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents); // 將文章用md格式讀取後，整理內容

    // Combine the data with the id
    return { // 將以上資料整理成一包物件
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}