export default function handler(req, res) {
   const { id, firstName, lastName } = req.body;
   //    setInterval(() => {
   console.log(" + ---> " + id + " " + firstName + " " + lastName);
   //    }, 1000);
   //    res.status(200).json({ name: "John Doe" });
}

// handler();
