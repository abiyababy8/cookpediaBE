const testimonials = require('../models/testimonyModel')

//add testimony
exports.addTestimonyController = async (req, res) => {
    console.log('Inside addTestimonyController')
    const { name, email, message } = req.body
    try {
        const newTestimony = new testimonials({
            name, email, message
        })
        await newTestimony.save()
        res.status(201).json(newTestimony)
    } catch (error) {
        res.status(401).json(error)
    }
}
// get all feedbacks
exports.getAllFeedbackController = async (req, res) => {
    console.log("Inside getAllFeedBackController")
    try {
        const allFeedbacks = await testimonials.find()
        res.status(200).json(allFeedbacks)
    } catch (error) {
        res.status(401).json(error)
    }
}
//update feedback
exports.updateFeedbackStatusController = async (req, res) => {
    console.log("Inside updateFeedbackStatusController")
    const { id } = req.params
    const status = req.query.status
    console.log(id, status)
    try {
        const existingFeedback = await testimonials.findById({ _id: id })
        existingFeedback.status = status
        await existingFeedback.save()
        res.status(201).json(existingFeedback)
    } catch (error) {
        res.status(401).json(error)
    }
}
//get approved feedbacks
exports.getApprovedFeedbackController=async(req,res)=>{
    try {
        const approvedFeedbacks=await testimonials.find({status:'Approved'})
        res.status(200).json(approvedFeedbacks)
    } catch (error) {
      res.status(401).json(error)  
    }
}