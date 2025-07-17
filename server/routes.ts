import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDownloadSchema, insertFeedbackSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Download tracking endpoint
  app.post("/api/downloads", async (req, res) => {
    try {
      const validatedData = insertDownloadSchema.parse(req.body);
      const download = await storage.createDownload(validatedData);
      res.json(download);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid download data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get download statistics
  app.get("/api/downloads/stats", async (req, res) => {
    try {
      const stats = await storage.getDownloadStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch download statistics" });
    }
  });

  // Feedback endpoint
  app.post("/api/feedback", async (req, res) => {
    try {
      const validatedData = insertFeedbackSchema.parse(req.body);
      const feedback = await storage.createFeedback(validatedData);
      res.json(feedback);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid feedback data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get feedback
  app.get("/api/feedback", async (req, res) => {
    try {
      const feedback = await storage.getFeedback();
      res.json(feedback);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch feedback" });
    }
  });

  // Mock download file endpoint
  app.get("/api/download/:platform", async (req, res) => {
    const { platform } = req.params;
    
    // Track the download
    try {
      await storage.createDownload({
        platform,
        version: "1.0.0",
        userAgent: req.headers["user-agent"] || "",
        ipAddress: req.ip || "",
      });
    } catch (error) {
      console.error("Failed to track download:", error);
    }

    // In a real implementation, this would serve the actual file
    // For demo purposes, we'll just return a success response
    res.json({ 
      message: "Download started", 
      platform,
      filename: `actogeam-${platform}-1.0.0.${platform === 'windows' ? 'exe' : platform === 'macos' ? 'dmg' : 'AppImage'}`,
      size: platform === 'windows' ? '85 MB' : platform === 'macos' ? '92 MB' : '78 MB'
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
