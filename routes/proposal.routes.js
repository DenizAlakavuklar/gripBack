const express = require('express');
const router = express.Router();
const Proposal = require('../models/Proposal.model');



  
// Add proposal for trip
router.post('/:tripId/add', /* isAuthenticated, */ async (req, res, next) => {
    const newProposalData = req.body
    console.log(newProposalData)
    const newProposal = await Proposal.create(newProposalData)
    res.status(201).json(newProposal)
      }
    );

// View proposal detailed page
router.get('/:tripId/:proposalId', /* isAuthenticated, */ async (req, res, next) => {
    console.log(req.params)
        const { proposalId } = req.params
        try {
            // Get proposals
            const proposal = await Proposal.find({_id: proposalId}).populate("votes").populate("createdBy")
            console.log("proposal=========>", proposal)
            res.json(proposal)
        } catch (error) {
            console.log(error)
        }
        }
    );

    // Get all proposals from a trip
router.get('/:tripId', /* isAuthenticated, */ async (req, res, next) => {
    console.log(req.params)
        const { tripId } = req.params
        try {
            // Get proposals
            const proposal = await Proposal.find({trip: tripId}).populate("votes").populate("createdBy")
            res.json(proposal)
        } catch (error) {
            console.log(error)
        }
        }
    );

    //update proposal 

    router.put('/:tripId/:proposalId', async (req, res) => {
        const { proposalId } = req.params
        const updateProposalData = req.body
        console.log(updateProposalData)
        console.log("req.params", req.params)
        const updatedProposal = await Proposal.findOneAndUpdate(proposalId, updateProposalData, {new:true})
        res.json({ message: 'Proposal sucessfully updated' , updatedProposal})
      })

    //delete proposal
    router.delete('/:tripId/:proposalId', async (req, res, next) => {
        const { proposalId } = req.params
        try {
          // Delete one recipe
          await Proposal.findByIdAndDelete(proposalId)
          res.json({ message: 'Proposal successfully deleted' })
        } catch (error) {
          console.log(error)
        }
      })
      

  module.exports = router;