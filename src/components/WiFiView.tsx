"use client"

import { useState } from "react"
import { QRCodeCanvas } from "qrcode.react"
import { Copy, Check, Wifi } from "lucide-react"
import { toast } from "sonner"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const WIFI_CONFIG = {
  ssid: "Francohouse",
  password: "i6qpbn4QHVjySHEGMA",
  encryption: "WPA",
}

// WIFI:T:WPA;S:Francohouse;P:i6qpbn4QHVjySHEGMA;;
const WIFI_QR_STRING = `WIFI:T:${WIFI_CONFIG.encryption};S:${WIFI_CONFIG.ssid};P:${WIFI_CONFIG.password};;`

export function WiFiView() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(WIFI_CONFIG.password)
      setCopied(true)
      toast.success("Mot de passe copié !", {
        description: "Vous pouvez maintenant vous connecter.",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error("Erreur lors de la copie")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-md mx-auto p-4 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">Wi-Fi Francohouse</h1>
        <p className="text-muted-foreground">Scannez le QR code ou copiez le mot de passe</p>
      </div>

      <Card className="w-full overflow-hidden border-muted/40 shadow-xl bg-card/50 backdrop-blur-sm">
        <CardContent className="flex flex-col items-center p-8 space-y-8">
          {/* QR Code Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative p-4 bg-white rounded-xl shadow-inner">
              <QRCodeCanvas
                value={WIFI_QR_STRING}
                size={220}
                level={"Q"}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                marginSize={1}
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Réseau (SSID)</label>
              <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50 border border-border">
                <Wifi className="h-4 w-4 text-white" />
                <span className="font-mono text-sm font-medium">{WIFI_CONFIG.ssid}</span>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Mot de passe</label>
              <div className="flex items-center justify-between gap-2 p-3 rounded-md bg-muted/50 border border-border group relative overflow-hidden">
                <span className="font-mono text-sm font-medium truncate select-all">
                  {WIFI_CONFIG.password}
                </span>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 hover:bg-white hover:text-black transition-colors"
                  onClick={copyToClipboard}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span className="sr-only">Copier</span>
                </Button>
              </div>
            </div>
          </div>

          <Button 
            className="w-full font-semibold" 
            size="lg" 
            onClick={copyToClipboard}
          >
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4" /> Copié
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" /> Copier le mot de passe
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
