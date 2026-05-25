"use client"

import { set } from "date-fns"
import { useEffect, useState } from "react"
import { getAllNotices } from "../actions/notice"
import { Notice } from "@/lib/types/notice"
import { getAllTeachers } from "../actions/teacher"
import type { Teacher } from "@/lib/types/teacher"
import { getGalleryImages } from "../actions/gallery"



export default function TeacherStats() {
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [notices, setNotices] = useState<Notice[]>([])
  const [gallery, setGallery] = useState<any[]>([])
  const [loading, setLoading] = useState(true)


  //teachers
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllTeachers()
        if (!res.success) {
          throw new Error(res.message || "Failed to fetch teachers");
        }
        setTeachers(res.data || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])


 //notices
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllNotices()
        if (!res.success) {
          throw new Error(res.message || "Failed to fetch notices");
        }
        const data = res.data
        setNotices(data || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getGalleryImages()
        if (!res.success) {
          throw new Error(res.message || "Failed to fetch gallery images");
        }
        const data = await res.data
        setGallery(data || [])
        // console.log(data)      //debug
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])





  if (loading) {
    return <p className="text-gray-500">Loading stats...</p>
  }

  const totalTeachers = teachers.length

  const activeTeachers = teachers.filter(
    (t) => t.status === "Active" || !t.status
  ).length




  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

      {/* Total Teachers */}
      <div className="bg-white p-4 rounded-xl shadow border">
        <h2 className="text-mm text-gray-500">Total Teachers</h2>
        <p className="text-2xl font-bold">{totalTeachers}</p>
      </div>

      {/* Active Teachers */}
      <div className="bg-green-50 p-4 rounded-xl shadow border">
        <h2 className="text-md text-green-600">Active Teachers</h2>
        <p className="text-2xl font-bold text-green-700">{activeTeachers}</p>
      </div>

      {/* Notices */}
      <div className="bg-pink-100 p-4 rounded-xl shadow border">
        <h2 className="text-md text-green-600">Notices</h2>
        <p className="text-2xl font-bold text-green-700">{notices.length}</p>
      </div>

      {/* Images */}
      <div className="bg-blue-50 p-4 rounded-xl shadow border">
        <h2 className="text-md text-green-600">Gallery Images</h2>
        <p className="text-2xl font-bold text-green-700">{gallery.length}</p>
      </div>

      {/* Average Experience */}
      {/* <div className="bg-amber-50 p-4 rounded-xl shadow border italic">
        Comming soon
      </div> */}

    </div>
  )
}