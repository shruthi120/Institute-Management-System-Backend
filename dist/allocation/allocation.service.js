"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllocationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AllocationService = class AllocationService {
    constructor(claimModel) {
        this.claimModel = claimModel;
    }
    async bucket_count() {
        const tflcount = await this.claimModel.aggregate([
            {
                $match: { $expr: {
                        $eq: [{ $cmp: ["$Tfl", "$Age"] }, -1],
                    },
                }
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBalanceAmount",
                    },
                },
            },
        ]);
        const fastapproachcount = await this.claimModel.aggregate([
            {
                $match: { $expr: {
                        $and: [
                            { $gte: [{ $subtract: ["$Tfl", "$Age"] }, 0] },
                            { $lte: [{ $subtract: ["$Tfl", "$Age"] }, 10] }
                        ]
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBalanceAmount",
                    },
                },
            },
        ]);
        const twotouchcount = await this.claimModel.aggregate([
            {
                $match: { Touch: 2 }
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBalanceAmount",
                    },
                },
            },
        ]);
        const threetouchcount = await this.claimModel.aggregate([
            {
                $match: { Touch: 3 }
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBalanceAmount",
                    },
                },
            },
        ]);
        const fourormorecount = await this.claimModel.aggregate([
            {
                $match: { $expr: {
                        $gte: ["$Touch", 4],
                    } }
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBalanceAmount",
                    },
                },
            },
        ]);
        const lessthan180dayscount = await this.claimModel.aggregate([
            {
                $match: { $expr: {
                        $lte: ["$Age", 180],
                    } }
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBalanceAmount",
                    },
                },
            },
        ]);
        const lowfollowupcount = await this.claimModel.aggregate([
            {
                $match: { $expr: {
                        $lte: ["$TotalBilledAmount", 30]
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
        ]);
        const d = new Date();
        d.toString();
        console.log(d);
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [d, "$Followup_date"] }
                },
            },
        ]);
        console.log(claim);
        const claimm = new this.claimModel();
        const claimdate = claimm.Followup_date;
        const Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate() + 1)) /
            (1000 * 60 * 60 * 24));
        const claimsmorethan30days = await this.claimModel.aggregate([
            {
                $match: { $expr: {
                        $gte: [Age, 30]
                    } }
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
        ]);
        const claimslessthan30days = await this.claimModel.aggregate([
            {
                $match: { $expr: {
                        $lte: [Age, 30]
                    } }
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
        ]);
        const claimsmorethan60days = await this.claimModel.aggregate([
            {
                $match: { $expr: {
                        $gte: [Age, 60]
                    } }
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
        ]);
        const claimsmorethan90days = await this.claimModel.aggregate([
            {
                $match: { $expr: {
                        $gte: [Age, 90]
                    } }
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
        ]);
        const claimsmorethan180days = await this.claimModel.aggregate([
            {
                $match: { $expr: {
                        $gte: [Age, 180]
                    } }
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
        ]);
        return [tflcount, fastapproachcount, twotouchcount, threetouchcount, fourormorecount, lessthan180dayscount, lowfollowupcount, claimsmorethan30days, claimslessthan30days, claimsmorethan60days, claimsmorethan90days, claimsmorethan180days];
    }
    async tflexceed_webClaims() {
        const timeexceed = await this.claimModel.find({
            type: "Web",
            $expr: {
                $eq: [{ $cmp: ["$Tfl", "$Age"] }, -1],
            },
        });
        return timeexceed;
    }
    async tflexceed_ivrClaims() {
        const timeexceed = await this.claimModel.find({
            type: "IVR",
            $expr: {
                $eq: [{ $cmp: ["$Tfl", "$Age"] }, -1],
            },
        });
        return timeexceed;
    }
    async tflexceed_manualClaims() {
        const timeexceed = await this.claimModel.find({
            type: "Manual",
            $expr: {
                $eq: [{ $cmp: ["$Tfl", "$Age"] }, -1],
            },
        });
        return timeexceed;
    }
    async fastapproach_web() {
        const fastapproach = await this.claimModel.find({
            type: "Web",
            $expr: {
                $and: [
                    { $gte: [{ $subtract: ["$Tfl", "$Age"] }, 0] },
                    { $lte: [{ $subtract: ["$Tfl", "$Age"] }, 10] }
                ]
            }
        });
        return fastapproach;
    }
    async fastapproach_ivr() {
        const fastapproach = await this.claimModel.find({
            type: "IVR",
            $expr: {
                $and: [
                    { $gte: [{ $subtract: ["$Tfl", "$Age"] }, 0] },
                    { $lte: [{ $subtract: ["$Tfl", "$Age"] }, 10] }
                ]
            }
        });
        return fastapproach;
    }
    async fastapproach_manual() {
        const fastapproach = await this.claimModel.find({
            type: "Manual",
            $expr: {
                $and: [
                    { $gte: [{ $subtract: ["$Tfl", "$Age"] }, 0] },
                    { $lte: [{ $subtract: ["$Tfl", "$Age"] }, 10] }
                ]
            }
        });
        return fastapproach;
    }
    async twotouch_web() {
        const twotouch = await this.claimModel.find({
            type: "Web",
            Touch: 2
        });
        return twotouch;
    }
    async twotouch_ivr() {
        const twotouch = await this.claimModel.find({
            type: "IVR",
            Touch: 2
        });
        return twotouch;
    }
    async twotouch_manual() {
        const twotouch = await this.claimModel.find({
            type: "Manual",
            Touch: 2
        });
        return twotouch;
    }
    async threetouch_web() {
        const threetouch = await this.claimModel.find({
            type: "Web",
            Touch: 3
        });
        return threetouch;
    }
    async threetouch_ivr() {
        const threetouch = await this.claimModel.find({
            type: "IVR",
            Touch: 3
        });
        return threetouch;
    }
    async threetouch_manual() {
        const threetouch = await this.claimModel.find({
            type: "Manual",
            Touch: 3
        });
        return threetouch;
    }
    async fourormore_web() {
        const fourormore = await this.claimModel.find({
            type: "Web",
            $expr: {
                $gte: ["$Touch", 4],
            }
        });
        return fourormore;
    }
    async fourormore_ivr() {
        const fourormore = await this.claimModel.find({
            type: "IVR",
            $expr: {
                $gte: ["$Touch", 4],
            }
        });
        return fourormore;
    }
    async fourormore_manual() {
        const fourormore = await this.claimModel.find({
            type: "Manual",
            $expr: {
                $gte: ["$Touch", 4],
            }
        });
        return fourormore;
    }
    async lessthan180daysclaims_web() {
        const lessthan180days = await this.claimModel.find({
            type: "Web",
            $expr: {
                $lte: ["$Age", 180],
            }
        });
        return lessthan180days;
    }
    async lessthan180daysclaims_ivr() {
        const lessthan180days = await this.claimModel.find({
            type: "IVR",
            $expr: {
                $lte: ["$Age", 180],
            }
        });
        return lessthan180days;
    }
    async lessthan180daysclaims_manual() {
        const lessthan180days = await this.claimModel.find({
            type: "Manual",
            $expr: {
                $lte: ["$Age", 180],
            }
        });
        return lessthan180days;
    }
    async lowfollowupclaims_web() {
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "Web",
            $expr: {
                $lte: ["$TotalBilledAmount", 30]
            }
        });
        return lowfollowup;
    }
    async lowfollowupclaims_ivr() {
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "IVR",
            $expr: {
                $lte: ["$TotalBilledAmount", 30]
            }
        });
        return lowfollowup;
    }
    async lowfollowupclaims_manual() {
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "Manual",
            $expr: {
                $lte: ["$TotalBilledAmount", 30]
            }
        });
        return lowfollowup;
    }
    async morethan30days_web() {
        var claimdate = new Date();
        var claimm = await this.claimModel.find({
            Followup_date: claimdate
        });
        var Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate())) /
            (1000 * 60 * 60 * 24));
        console.log(Age);
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                },
            },
        ]);
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "Web",
            $expr: {
                $gte: [Age, 30]
            }
        });
        return lowfollowup;
    }
    async morethan30days_ivr() {
        var claimdate = new Date();
        var claimm = await this.claimModel.find({
            Followup_date: claimdate
        });
        var Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate())) /
            (1000 * 60 * 60 * 24));
        console.log(Age);
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                },
            },
        ]);
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "IVR",
            $expr: {
                $gte: [Age, 30]
            }
        });
        return lowfollowup;
    }
    async morethan30days_manual() {
        var claimdate = new Date();
        var claimm = await this.claimModel.find({
            Followup_date: claimdate
        });
        var Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate())) /
            (1000 * 60 * 60 * 24));
        console.log(Age);
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                },
            },
        ]);
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "Manual",
            $expr: {
                $gte: [Age, 30]
            }
        });
        return lowfollowup;
    }
    async lessthan30days_web() {
        var claimdate = new Date();
        var claimm = await this.claimModel.find({
            Followup_date: claimdate
        });
        var Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate())) /
            (1000 * 60 * 60 * 24));
        console.log(Age);
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "Web",
            $expr: {
                $lte: [Age, 30]
            }
        });
        return lowfollowup;
    }
    async lessthan30days_ivr() {
        var claimdate = new Date();
        console.log(claimdate);
        var datefe = null;
        console.log(datefe);
        let claimm = await this.claimModel.find({
            type: "IVR",
        }, { $Followup_date: datefe });
        let clim = new this.claimModel();
        console.log(clim.Followup_date);
        console.log(datefe);
        var Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate() + 1)) /
            (1000 * 60 * 60 * 24));
        console.log(Age);
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "IVR",
            $expr: {
                $lte: [Age, 30]
            }
        });
        return [lowfollowup, claimm];
    }
    async lessthan30days_manual() {
        var claimdate = new Date();
        var claimm = await this.claimModel.find({
            Followup_date: claimdate
        });
        var Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate())) /
            (1000 * 60 * 60 * 24));
        console.log(Age);
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "Manual",
            $expr: {
                $lte: [Age, 30]
            }
        });
        return lowfollowup;
    }
    async morethan90days_web() {
        var claimdate = new Date();
        var claimm = await this.claimModel.find({
            Followup_date: claimdate
        });
        var Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate())) /
            (1000 * 60 * 60 * 24));
        console.log(Age);
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                },
            },
        ]);
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "Web",
            $expr: {
                $gte: [Age, 90]
            }
        });
        return lowfollowup;
    }
    async morethan90days_ivr() {
        var claimdate = new Date();
        var claimm = await this.claimModel.find({
            Followup_date: claimdate
        });
        var Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate())) /
            (1000 * 60 * 60 * 24));
        console.log(Age);
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                },
            },
        ]);
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "IVR",
            $expr: {
                $gte: [Age, 90]
            }
        });
        return lowfollowup;
    }
    async morethan90days_manual() {
        var claimdate = new Date();
        var claimm = await this.claimModel.find({
            Followup_date: claimdate
        });
        var Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate())) /
            (1000 * 60 * 60 * 24));
        console.log(Age);
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                },
            },
        ]);
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "Manual",
            $expr: {
                $gte: [Age, 90]
            }
        });
        return lowfollowup;
    }
    async morethan60days_web() {
        var claimdate = new Date();
        var claimm = await this.claimModel.find({
            Followup_date: claimdate
        });
        var Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate())) /
            (1000 * 60 * 60 * 24));
        console.log(Age);
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                },
            },
        ]);
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "Web",
            $expr: {
                $gte: [Age, 60]
            }
        });
        return lowfollowup;
    }
    async morethan60days_ivr() {
        var claimdate = new Date();
        var claimm = await this.claimModel.find({
            Followup_date: claimdate
        });
        var Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate())) /
            (1000 * 60 * 60 * 24));
        console.log(Age);
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                },
            },
        ]);
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "IVR",
            $expr: {
                $gte: [Age, 60]
            }
        });
        return lowfollowup;
    }
    async morethan60days_manual() {
        var claimdate = new Date();
        var claimm = await this.claimModel.find({
            Followup_date: claimdate
        });
        var Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate() + 1)) /
            (1000 * 60 * 60 * 24));
        console.log(Age);
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "Manual",
            $expr: {
                $gte: [Age, 60]
            }
        });
        return lowfollowup;
    }
    async morethan180days_web() {
        var claimdate = new Date();
        var claimm = await this.claimModel.find({
            Followup_date: claimdate
        });
        var Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate())) /
            (1000 * 60 * 60 * 24));
        console.log(Age);
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                },
            },
        ]);
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "Web",
            $expr: {
                $gte: [Age, 180]
            }
        });
        return lowfollowup;
    }
    async morethan180days_ivr() {
        var claimdate = new Date();
        var claimm = await this.claimModel.find({
            Followup_date: claimdate
        });
        var Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate())) /
            (1000 * 60 * 60 * 24));
        console.log(Age);
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                },
            },
        ]);
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "ivr",
            $expr: {
                $gte: [claim, 180]
            }
        });
        return lowfollowup;
    }
    async morethan180days_manual() {
        var claimdate = new Date();
        var claimm = await this.claimModel.find({
            Followup_date: claimdate
        });
        var Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate())) /
            (1000 * 60 * 60 * 24));
        console.log(Age);
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                },
            },
        ]);
        const lowfollowup = await this.claimModel.find({
            Claimunder: null,
            type: "manual",
            $expr: {
                $gte: [Age, 180]
            }
        });
        return lowfollowup;
    }
    async get_allocation_bucket(allocation_bucket, userid) {
        if (allocation_bucket == 1) {
            const timeexceed = await this.claimModel.find({
                Claimunder: null,
                $expr: {
                    $eq: [{ $cmp: ["$Tfl", "$Age"] }, -1],
                },
            });
            var data = [];
            for (let i = 0; i < timeexceed.length; i++) {
                data.push(timeexceed[i]._id);
            }
            const claim = await this.claimModel.updateMany({ _id: { $in: data } }, { $set: { Claimunder: userid } });
        }
        else if (allocation_bucket == 2) {
            const fastapproach = await this.claimModel.find({
                Claimunder: null,
                $expr: {
                    $and: [
                        { $gte: [{ $subtract: ["$Tfl", "$Age"] }, 0] },
                        { $lte: [{ $subtract: ["$Tfl", "$Age"] }, 10] }
                    ]
                }
            });
            var data = [];
            for (let i = 0; i < fastapproach.length; i++) {
                data.push(fastapproach[i]._id);
            }
            const claim = await this.claimModel.updateMany({ _id: { $in: data } }, { $set: { Claimunder: userid } });
        }
        else if (allocation_bucket == 3) {
            const twotouch = await this.claimModel.find({
                Claimunder: null,
                Touch: 2
            });
            var data = [];
            for (let i = 0; i < twotouch.length; i++) {
                data.push(twotouch[i]._id);
            }
            const claim = await this.claimModel.updateMany({ _id: { $in: data } }, { $set: { Claimunder: userid } });
        }
        else if (allocation_bucket == 4) {
            const threetouch = await this.claimModel.find({
                Claimunder: null,
                Touch: 3
            });
            var data = [];
            for (let i = 0; i < threetouch.length; i++) {
                data.push(threetouch[i]._id);
            }
            const claim = await this.claimModel.updateMany({ _id: { $in: data } }, { $set: { Claimunder: userid } });
        }
        else if (allocation_bucket == 5) {
            const fourormore = await this.claimModel.find({
                Claimunder: null,
                $expr: {
                    $gte: ["$Touch", 4],
                }
            });
            var data = [];
            for (let i = 0; i < fourormore.length; i++) {
                data.push(fourormore[i]._id);
            }
            const claim = await this.claimModel.updateMany({ _id: { $in: data } }, { $set: { Claimunder: userid } });
        }
        else if (allocation_bucket == 6) {
            const lessthan180days = await this.claimModel.find({
                Claimunder: null,
                $expr: {
                    $lte: ["$Age", 180],
                }
            });
            var data = [];
            for (let i = 0; i < lessthan180days.length; i++) {
                data.push(lessthan180days[i]._id);
            }
            const claim = await this.claimModel.updateMany({ _id: { $in: data } }, { $set: { Claimunder: userid } });
        }
        else if (allocation_bucket == 7) {
            const lowfollowup = await this.claimModel.find({
                Claimunder: null,
                $expr: {
                    $lte: ["$TotalBilledAmount", 30]
                }
            });
            var data = [];
            for (let i = 0; i < lowfollowup.length; i++) {
                data.push(lowfollowup[i]._id);
            }
            const claim = await this.claimModel.updateMany({ _id: { $in: data } }, { $set: { Claimunder: userid } });
        }
    }
    async get_allocationbucket(allocation_bucket) {
        if (allocation_bucket == 1) {
            const timeexceed = await this.claimModel.find({
                $expr: {
                    $eq: [{ $cmp: ["$Tfl", "$Age"] }, -1],
                },
            });
            return timeexceed;
        }
        else if (allocation_bucket == 2) {
            const fastapproach = await this.claimModel.find({
                $expr: {
                    $and: [
                        { $gte: [{ $subtract: ["$Tfl", "$Age"] }, 0] },
                        { $lte: [{ $subtract: ["$Tfl", "$Age"] }, 10] }
                    ]
                }
            });
            return fastapproach;
        }
        else if (allocation_bucket == 3) {
            const twotouch = await this.claimModel.find({
                Touch: 2
            });
            return twotouch;
        }
        else if (allocation_bucket == 4) {
            const threetouch = await this.claimModel.find({
                Touch: 3
            });
            return threetouch;
        }
        else if (allocation_bucket == 5) {
            const fourormore = await this.claimModel.find({
                $expr: {
                    $gte: ["$Touch", 4],
                }
            });
            return fourormore;
        }
        else if (allocation_bucket == 6) {
            const lessthan180days = await this.claimModel.find({
                $expr: {
                    $lte: ["$Age", 180],
                }
            });
            return lessthan180days;
        }
        else if (allocation_bucket == 7) {
            const lowfollowup = await this.claimModel.find({
                $expr: {
                    $lte: ["$TotalBilledAmount", 30]
                }
            });
            return lowfollowup;
        }
        else if (allocation_bucket == 8) {
            const claim = await this.claimModel.aggregate([{
                    $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                    },
                },
            ]);
            const lowfollowup = await this.claimModel.find({
                $expr: {
                    $gte: [claim, 30]
                }
            });
            return lowfollowup;
        }
        else if (allocation_bucket == 9) {
            const claim = await this.claimModel.aggregate([{
                    $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                    },
                },
            ]);
            const lowfollowup = await this.claimModel.find({
                $expr: {
                    $lte: [claim, 30]
                }
            });
            return lowfollowup;
        }
        else if (allocation_bucket == 10) {
            const claim = await this.claimModel.aggregate([{
                    $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                    },
                },
            ]);
            const lowfollowup = await this.claimModel.find({
                $expr: {
                    $gte: [claim, 60]
                }
            });
            return lowfollowup;
        }
        else if (allocation_bucket == 11) {
            const claim = await this.claimModel.aggregate([{
                    $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                    },
                },
            ]);
            const lowfollowup = await this.claimModel.find({
                $expr: {
                    $gte: [claim, 90]
                }
            });
            return lowfollowup;
        }
    }
    async tflexceed_Claims(body) {
        const timeexceed = await this.claimModel.find({ ClaimID: body.ClaimID,
            $expr: {
                $eq: [{ $cmp: ["$Tfl", "$Age"] }, -1],
            },
        });
        return timeexceed;
    }
    async fastapproach(body) {
        const fastapproach = await this.claimModel.find({
            ClaimID: body.ClaimID,
            $expr: {
                $and: [
                    { $gte: [{ $subtract: ["$Tfl", "$Age"] }, 0] },
                    { $lte: [{ $subtract: ["$Tfl", "$Age"] }, 10] }
                ]
            }
        });
        return fastapproach;
    }
    async twotouch(body) {
        const twotouch = await this.claimModel.find({
            ClaimID: body.ClaimID,
            Touch: 2
        });
        return twotouch;
    }
    async threetouch(body) {
        const threetouch = await this.claimModel.find({
            ClaimID: body.ClaimID,
            Touch: 3
        });
        return threetouch;
    }
    async fourormore(body) {
        const fourormore = await this.claimModel.find({
            ClaimID: body.ClaimID,
            $expr: {
                $gte: ["$Touch", 4],
            }
        });
        return fourormore;
    }
    async lessthan180daysclaims(body) {
        const lessthan180days = await this.claimModel.find({
            ClaimID: body.ClaimID,
            $expr: {
                $lte: ["$Age", 180],
            }
        });
        return lessthan180days;
    }
    async lowfollowupclaims(body) {
        const lowfollowup = await this.claimModel.find({
            ClaimID: body.ClaimID,
            $expr: {
                $lte: ["$TotalBilledAmount", 30]
            }
        });
        return lowfollowup;
    }
    async morethan30daysclaims(body) {
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                },
            },
        ]);
        const morethan30days = await this.claimModel.find({
            ClaimID: body.ClaimID,
            $expr: {
                $gte: [claim, 30]
            }
        });
        return [morethan30days];
    }
    async lessthan30daysclaims(body) {
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                },
            },
        ]);
        const lessthan30days = await this.claimModel.find({
            ClaimID: body.ClaimID,
            $expr: {
                $lte: [claim, 30]
            }
        });
        return lessthan30days;
    }
    async morethan60daysclaims(body) {
        const claimm = new this.claimModel();
        const claimdate = claimm.Followup_date;
        const Age = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate() + 1)) /
            (1000 * 60 * 60 * 24));
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                },
            },
        ]);
        const lessthan30days = await this.claimModel.find({
            ClaimID: body.ClaimID,
            $expr: {
                $lte: [Age, 30]
            }
        });
        return lessthan30days;
    }
    async lessthan90daysclaims(body) {
        const claim = await this.claimModel.aggregate([{
                $project: { date: { $subtract: [new Date(), "$Followup_date"] }
                },
            },
        ]);
        const lessthan90days = await this.claimModel.find({
            ClaimID: body.ClaimID,
            $expr: {
                $lte: [claim, 30]
            }
        });
        return lessthan90days;
    }
};
AllocationService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("Claim")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AllocationService);
exports.AllocationService = AllocationService;
//# sourceMappingURL=allocation.service.js.map